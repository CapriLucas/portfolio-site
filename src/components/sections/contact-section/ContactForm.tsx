'use client';

import { useState } from 'react';
import styles from './ContactSection.module.scss';

interface ContactFormProps {
  dictionary: {
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
      success: string;
      error: string;
    };
  };
}

export default function ContactForm({ dictionary }: ContactFormProps) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage({ type: 'success', text: dictionary.form.success });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setMessage({ type: 'error', text: dictionary.form.error });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      {message && (
        <div className={`${styles.contactForm__message} ${styles[`contactForm__message--${message.type}`]}`}>
          {message.text}
        </div>
      )}

      <div className={styles.contactForm__field}>
        <label className={styles.contactForm__label}>
          {dictionary.form.name}
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={dictionary.form.name}
          className={styles.contactForm__input}
          required
        />
      </div>

      <div className={styles.contactForm__field}>
        <label className={styles.contactForm__label}>
          {dictionary.form.email}
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={dictionary.form.email}
          className={styles.contactForm__input}
          required
        />
      </div>

      <div className={styles.contactForm__field}>
        <label className={styles.contactForm__label}>
          {dictionary.form.message}
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={dictionary.form.message}
          className={styles.contactForm__textarea}
          rows={6}
          minLength={10}
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={styles.contactForm__submit}
      >
        {loading ? 'Sending...' : `💌 ${dictionary.form.submit}`}
      </button>
    </form>
  );
}