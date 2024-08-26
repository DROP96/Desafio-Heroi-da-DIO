let NomeHeroi = "DROP Matador de Noob";
let rank = "";
let PontosXP = 9500; // Nível atual de XP do Herói

  
  if (PontosXP <= 1000) {
    rank = "FERRO";
  } else if (PontosXP >= 1001 && PontosXP <= 2000) {
    rank = "BRONZE";
  } else if (PontosXP >= 2001 && PontosXP <= 5000) {
    rank = "PRATA";
  } else if (PontosXP >= 5001 && PontosXP <= 7000) {
    rank = "OURO";
  } else if (PontosXP >= 7001 && PontosXP <= 8000) {
    rank = "PLATINA";
  } else if (PontosXP >= 8001 && PontosXP <= 9000) {
    rank = "ASCENDENTE";
  } else if (PontosXP >= 9001 && PontosXP <= 10000) {
    rank = "IMORTAL";
  } else if (PontosXP >= 10001 && PontosXP <= 11000) {
    rank = "RADIANTE";
  }


  console.log("Seu Herói " + NomeHeroi + " está no Rank " + rank)
