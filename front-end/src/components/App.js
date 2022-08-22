import { useEffect, useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
const ENV = process.env.NODE_ENV;
const envFile = ENV === 'development' ? '.env.development' : '.env';

console.log({ Enverioment: ENV, envFile });
dotenv.config({ path: `${envFile}` });

function App() {
	const [student, setStudent] = useState(null);

	useEffect(async () => {
		const API_URL = process.env.REACT_APP_BASE_URL;
		try {
			const response = await axios.get(`${API_URL}/students/random`);
			const student = response.data;
			if (!student) {
				alert('Putz! Não há estudantes cadastrados para o sorteio!');
			} else {
				setStudent(student);
			}
		} catch (error) {
			alert('Não foi possível realizar o sorteio!');
		}
	}, []);

	return student ? <h1>Nome: {student.name}</h1> : 'Carregando...';
}

export default App;
