import React, { Component } from "react";
import "./Feed.css";
import { api, baseURL } from "../services/api";
import io from "socket.io-client"; //faz a ponte do socket io que já foi configurado na api

import more from "../assets/more.svg";
import like from "../assets/like.svg";
import comment from "../assets/comment.svg";
import send from "../assets/send.svg";

export default class Feed extends Component {
  state = {
    feed: []
  };

  async componentDidMount() {
    this.registerToSocket();
    const response = await api.get("posts");
    this.setState({ feed: response.data });
  }

  handleLike = id => {
    api.post(`/posts/${id}/like`);
  };

  registerToSocket = () => {
    const socket = io(baseURL);

    socket.on("post", newPost => {
      //estou ouvindo os dados de um novo post

      this.setState({ feed: [newPost, ...this.state.feed] }); //estou copiando o novo poste para a primeira posição do array de posts
    });

    socket.on("like", likedPost => {
      //estou ouvindo os dados de um novo like
      this.setState({
        feed: this.state.feed.map(
          (
            post // ao invez de criar um novo estado para like eu estou percorrendo a variavel feed e procurando os dados do like
          ) => (post._id === likedPost.id ? likedPost : post) //se o post que eu estou varrendo é igual ao post que eu dei um like eu retorno o post com o like novo se não eu retorno o post como ele já é
        )
      });
    });
  };
  //O ID que retorna do mogoDB vem com um _ antes do id ou seja "_id"
  render() {
    return (
      <section id="post-list">
        {this.state.feed.map(post => (
          <article key={post._id}>
            <header>
              <div className="user-info">
                <span>{post.author}</span>
                <span className="place">{post.place}</span>
              </div>
              <img src={more} alt="Mais" />
            </header>
            <img src={`${baseURL}/files/${post.image}`} alt="" />

            <footer>
              <div className="actions">
                <button type="button" onClick={() => this.handleLike(post._id)}>
                  <img src={like} alt="" />
                </button>
                <img src={comment} alt="" />
                <img src={send} alt="" />
              </div>

              <strong>{post.likes} curtidas</strong>
              <p>{post.description}</p>
              <span>{post.hashtags}</span>
            </footer>
          </article>
        ))}
      </section>
    );
  }
}
