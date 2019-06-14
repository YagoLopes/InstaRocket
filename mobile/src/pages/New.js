import React, { Component } from "react";
import ImagePicker from "react-native-image-picker";
import styles from "./NewStyles";
import { View, TouchableOpacity, Text, TextInput, Image } from "react-native";

export default class New extends Component {
  static navigationOptions = {
    headerTitle: "Nova publicação"
  };
  state = { author: "", place: "", description: "", hashtags: "" };

  handleSelectImage = () => {
    ImagePicker.showImagePicker(
      {
        title: "Selectionar imagem"
      },
      upload => {}
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.selectButton}
          onPress={this.handleSelectImage}
        >
          <Text style={styles.selectButtonText}>Selecionar imagem</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Nome do autor"
          placeholderTextColor="#999"
          value={this.state.author}
          onChangeText={text => this.setState({ author })}
        />
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Local da foto"
          placeholderTextColor="#999"
          value={this.state.place}
          onChangeText={text => this.setState({ place })}
        />
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Descrição"
          placeholderTextColor="#999"
          value={this.state.description}
          onChangeText={text => this.setState({ description })}
        />
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Hashtags"
          placeholderTextColor="#999"
          value={this.state.hashtags}
          onChangeText={text => this.setState({ hashtags })}
        />
        <TouchableOpacity style={styles.shareButton} onPress={() => {}}>
          <Text style={styles.shareButtonText}>Compartilhar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
