function gerarDiaDaSemana () {
      const DiaDaSemana = new Date().toLocaleDateString("pt-BR", {
        weekday:"long"
    });
    const Data = new Date().toLocaleDateString("pt-BR");    
    const Horario = new Date().toLocaleTimeString("pt-BR", {
        hour: "numeric",
        minute: "numeric"
    });
    const DataCompleta = `${DiaDaSemana} (${Data}) ás ${Horario}`;

    return DataCompleta;
}

export default gerarDiaDaSemana;