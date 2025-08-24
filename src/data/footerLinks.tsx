import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa'

export const socialLinks = [
  { icon: FaTwitter, color: 'hover:bg-blue-600' },
  { icon: FaInstagram, color: 'hover:bg-pink-600' },
  { icon: FaFacebook, color: 'hover:bg-blue-700' },
]

export const menuLinks = ['О нас', 'Доставка', 'Оплата', 'Гарантия']

export const categories = ['Электроника', 'Одежда', 'Дом и сад', 'Красота']

export const contacts = [
  { icon: FaPhone, text: '+7 (777) 777-77-77' },
  { icon: FaEnvelope, text: 'mail@mail.ru' },
  { icon: FaMapMarkerAlt, text: 'Алматы, ул. lorem, 225' },
]
