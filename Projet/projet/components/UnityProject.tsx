'use client';

import React, { Component } from 'react';
import './QuizStyles.css'; // Assurez-vous de lier le fichier CSS dans votre projet

class FishExtinctionQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      question1: '',
      question2: '',
      question3: '',
      question4: '',
      result: '',
      showAnswers: false,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { question1, question2, question3, question4 } = this.state;

    let score = 0;
    if (question1 === 'A') score++;
    if (question2 === 'B') score++;
    if (question3 === 'A') score++;
    if (question4 === 'C') score++;

    let resultMessage = '';
    if (score === 4) {
      resultMessage = 'Vous êtes un expert en poissons en voie d\'extinction!';
    } else if (score >= 2) {
      resultMessage = 'Vous avez une bonne connaissance sur les poissons en voie d\'extinction.';
    } else {
      resultMessage = 'Vous avez encore beaucoup à apprendre!';
    }

    this.setState({ result: resultMessage, showAnswers: true });
  };

  render() {
    return (
      <div className="quiz-container">
        <h2>Questionnaire sur les poissons en voie d'extinction</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Nom:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </label>
          <br />

          <label>
            1. Quel est l'une des principales causes de l'extinction des poissons?
            <br />
            <input
              type="radio"
              name="question1"
              value="A"
              onChange={this.handleChange}
            /> Pollution de l'eau
            <br />
            <input
              type="radio"
              name="question1"
              value="B"
              onChange={this.handleChange}
            /> Pêche durable
            <br />
            <input
              type="radio"
              name="question1"
              value="C"
              onChange={this.handleChange}
            /> Réduction de la température de l'eau
          </label>
          <br />

          <label>
            2. Quelle est l'espèce de poisson la plus en danger?
            <br />
            <input
              type="radio"
              name="question2"
              value="A"
              onChange={this.handleChange}
            /> Thon rouge
            <br />
            <input
              type="radio"
              name="question2"
              value="B"
              onChange={this.handleChange}
            /> Poisson-clown
            <br />
            <input
              type="radio"
              name="question2"
              value="C"
              onChange={this.handleChange}
            /> Saumon
          </label>
          <br />

          <label>
            3. Quelle organisation se consacre à la préservation des poissons en voie d'extinction?
            <br />
            <input
              type="radio"
              name="question3"
              value="A"
              onChange={this.handleChange}
            /> WWF
            <br />
            <input
              type="radio"
              name="question3"
              value="B"
              onChange={this.handleChange}
            /> Greenpeace
            <br />
            <input
              type="radio"
              name="question3"
              value="C"
              onChange={this.handleChange}
            /> Sea Shepherd
          </label>
          <br />

          <label>
            4. Quelle est une solution pour protéger les poissons en voie d'extinction?
            <br />
            <input
              type="radio"
              name="question4"
              value="A"
              onChange={this.handleChange}
            /> Interdire la pêche
            <br />
            <input
              type="radio"
              name="question4"
              value="B"
              onChange={this.handleChange}
            /> Augmenter la pêche
            <br />
            <input
              type="radio"
              name="question4"
              value="C"
              onChange={this.handleChange}
            /> Création de réserves marines protégées
          </label>
          <br />

          <button type="submit">Soumettre</button>
        </form>

        {this.state.result && (
          <div className="result-container fade-in">
            <h3>{this.state.result}</h3>
            {this.state.showAnswers && (
              <div>
                <h4>Réponses correctes :</h4>
                <ul>
                  <li>1. A: Pollution de l'eau</li>
                  <li>2. B: Poisson-clown</li>
                  <li>3. A: WWF</li>
                  <li>4. C: Création de réserves marines protégées</li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default FishExtinctionQuiz;
