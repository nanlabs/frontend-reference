import axios from 'axios';

const API_TRIVIA_URL = import.meta.env.VITE_API_TRIVIA_URL;

export const fetchTriviaQuestions = async ({
  limit = 10,
  categories = null,
  difficulties = 'easy,medium,hard',
  region = 'AR',
  types = 'text_choice',
}) => {
  const res = await axios.get(
    `${API_TRIVIA_URL}/questions?limit=${limit}&categories=${categories}&difficulties=${difficulties}&region=${region}&types=${types}`
  );
  return res.data || [];
};

export const countryList = [
  { name: 'Argentina', code: 'AR' },
  { name: 'Bolivia', code: 'BO' },
  { name: 'Chile', code: 'CL' },
  { name: 'Colombia', code: 'CO' },
  { name: 'Costa Rica', code: 'CR' },
  { name: 'Cuba', code: 'CU' },
  { name: 'Ecuador', code: 'EC' },
  { name: 'El Salvador', code: 'SV' },
  { name: 'Equatorial Guinea', code: 'GQ' },
  { name: 'Guatemala', code: 'GT' },
  { name: 'Honduras', code: 'HN' },
  { name: 'Mexico', code: 'MX' },
  { name: 'Nicaragua', code: 'NI' },
  { name: 'Panama', code: 'PA' },
  { name: 'Paraguay', code: 'PY' },
  { name: 'Peru', code: 'PE' },
  { name: 'Puerto Rico', code: 'PR' },
  { name: 'Spain', code: 'ES' },
  { name: 'Uruguay', code: 'UY' },
  { name: 'Venezuela', code: 'VE' },
];
