import React, { Component } from "react";
import "./New.css";
import { api } from "../services/api";

export default class New extends Component {
  state = {
    image: null,
    author: "",
    place: "",
    description: "",
    hashtags: ""
  };

  handleSubmit = async e => {
    e.preventDefault();
    const data = new FormData(); // quando enviamos a requisição como multipartformdata é preciso criar um objeto data para pegar todos os dados
    data.append("image", this.state.image);
    data.append("author", this.state.author);
    data.append("place", this.state.place);
    data.append("description", this.state.description);
    data.append("hashtags", this.state.hashtags);
    await api.post("posts", data); // o objeto data contem todos os dados
    this.props.history.push("/"); //historico de rotas do usuario e enviando para uma nova rota
  };

  handleImageChange = e => {
    //não consigo usar a mesma função para o inpu image porque o valor dele vem em formato array
    this.setState({ image: e.target.files[0] }); //como o image vem em array eu pego o 0 simbolizando apenas o primeiro
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form id="new-post" onSubmit={this.handleSubmit}>
        <input type="file" onChange={this.handleImageChange} />
        <input
          type="text"
          name="author"
          placeholder="Autor do post"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="place"
          placeholder="Local do post"
          onChange={this.handleChange}
          value={this.state.place}
        />
        <input
          type="text"
          name="description"
          placeholder="Descrição do post"
          onChange={this.handleChange}
          value={this.state.description}
        />
        <input
          type="text"
          name="hashtags"
          placeholder="hashtags do post"
          onChange={this.handleChange}
          value={this.state.hashtags}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}
