import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1 //ocupa a largura e altura toda da tela independente do tanto de conteudos da lista
  },
  feedItem: {
    marginTop: 20 //para distanciar um item do outro
  },
  feedItemHeader: {
    paddingHorizontal: 15, //para distanciar o header da esquerda e da direita
    flexDirection: "row", //alinha os items em linha
    justifyContent: "space-between", //faz o icone ficar totalmente a direita
    alignItems: "center" //alinha o icone com o texto da direita;
  },
  name: {
    fontSize: 14,
    color: "#000"
  },
  place: {
    fontSize: 12,
    color: "#666",
    marginTop: 2
  },

  feedImage: {
    width: "100%",
    height: 400, //largura maxima em pixel
    marginVertical: 15 //para distanciar do header e do footer
  },

  feedItemFooter: {
    paddingHorizontal: 15
  },
  actions: {
    flexDirection: "row" //alinha os icones em linha
  },
  action: {
    marginRight: 8 // para distanciar os icones
  },

  likes: {
    marginTop: 15,
    fontWeight: "bold",
    color: "#000"
  },
  description: {
    lineHeight: 18, //para caso haja mais linhas
    color: "#000"
  },
  hashtags: {
    color: "#7159c1"
  }
});

export default styles;
