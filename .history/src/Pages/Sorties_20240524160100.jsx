import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Header from '../Header';
import '../styles/sorties.css';
import { Button } from '@chakra-ui/react';

const AddSortie = ({ onSortieAdded }) => {
  const nomRef = useRef();
  const dateRef = useRef();
  const typeRef = useRef();
  const horairesRef = useRef();
  const lieuRef = useRef();

  const ajouterSortie = async () => {
    const nom = nomRef.current.value;
    const date = dateRef.current.value;
    const type = typeRef.current.value;
    const horaires = horairesRef.current.value;
    const lieu = lieuRef.current.value;

    const url = `http://localhost:3000/sorties/${nom}/${date}/${type}/${horaires}/${lieu}`;

    try {
      const response = await axios.post(url);
      console.log(response.data);
      alert('Sortie ajoutée avec succès!');
      onSortieAdded();
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de l\'ajout de la sortie');
    }
  };

  return (
    <div className="add-sortie">
      <input type="text" placeholder='Nom' ref={nomRef} />
      <input type="text" placeholder='Date' ref={dateRef} />
      <input type="text" placeholder='Type (ex: "Sportif")' ref={typeRef} />
      <input type="text" placeholder='Horaires' ref={horairesRef} />
      <input type="text" placeholder='Lieu' ref={lieuRef} />
      <Button onClick={ajouterSortie}>Ajouter une sortie</Button>
    </div>
  );
};

function Sorties() {
  const [sorties, setSorties] = useState([]);

  useEffect(() => {
    const fetchSorties = async () => {
      try {
        const response = await fetch('http://localhost:3000/sorties');
        if (!response.ok) throw new Error('Erreur lors de la récupération des données');
        const data = await response.json();
        setSorties(data);
        console.log('Les sorties ont été mises à jour :', data);
      } catch (error) {
        console.error('Erreur lors de la récupération des sorties :', error.message);
      }
    };
    fetchSorties();
  }, []);

  const handleSortieAdded = async () => {
    try {
      const response = await fetch('http://localhost:3000/sorties');
      const data = await response.json();
      setSorties(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des sorties :', error.message);
    }
  };

  return (
    <>
      <Header />
      <div className="sorties">
        <AddSortie onSortieAdded={handleSortieAdded} />
        <ul className='liste-sorties'>
          {sorties.map((sortie) => (
            <li key={sortie.id} className="card">
              <h2>{sortie.nom}</h2>
              <p>Date: {sortie.date}</p>
              <p>Type: {sortie.type}</p>
              <p>Horaires: {sortie.horaires}</p>
              <p>Lieu: {sortie.lieu}</p>
              <Button>Modifier</Button>
              <Button>Supprimer</Button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sorties;
