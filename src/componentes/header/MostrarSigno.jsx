let mostrarSigno = (precio) => {
  const signoPesos = ["$", "$$", "$$$", "$$$$"];

  if (precio == 1) {
    return signoPesos[0];
  } else if (precio == 2) {
    return signoPesos[1];
  } else if (precio == 3) {
    return signoPesos[2];
  } else if (precio == 4) {
    return signoPesos[3];
  }
};

export default mostrarSigno;
