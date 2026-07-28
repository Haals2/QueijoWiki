const img = document.getElementById("Image")
const descricao = document.getElementById('descricao');
const modal = document.getElementById('modal');

document.getElementById("ButtonGorgonzola").addEventListener("click", () => {
    img.src = "/assets/Gorgonzola.jpg";
    descricao.textContent = "O gorgonzola é uma variedade de queijo azul fabricado com leite de vaca, originário da localidade de Gorgonzola, nos arredores de Milão, na Itália.[1] A sua massa é cremosa, possuindo um sabor agradável e um aroma intenso. Neste queijo, assim como em todos os queijos azuis, no processo de maturação, são injetados fungos, que fazem com que tenha veias verde-azuladas e que lhe dão um sabor especial. Neste caso, injeta-se o Penicillium.[2] Na fabricação industrial, atualmente usa-se o processo HTST (High Temperature Short Time) para pasteurizá-lo. Outro método de pasteurização é o ejetor de vapor.";
});

document.getElementById("ButtonPrato").addEventListener("click", () => {
    img.src = "/assets/Prato.jpg";
    descricao.textContent = "Queijo prato, também chamado de queijo lanche, é um tipo de queijo macio de massa prensada e textura semelhante à do queijo Dinamarquês Danbo. Tem coloração amarela e sabor suave."
});

document.getElementById("ButtonCheddar").addEventListener("click", () => {
    img.src = "/assets/Cheddar.png";
    descricao.textContent = "O cheddar é uma variedade de queijo, originalmente produzido na Idade Média na aldeia de Cheddar no condado inglês de Somerset.[1] As vezes é alaranjado por corantes. De cor branca ou amarelada, apresenta consistência firme. Deve ter um período de amadurecimento (cura) de pelo menos doze a dezoito meses.";
});

document.getElementById("ButtonProvolone").addEventListener("click", () => {
    img.src = "/assets/Provolone.jpg";
    descricao.textContent = "É característico pela sua pasta filada. O leite e o coalho são batidos com uma espécie de lâminas que faz com que a pasta resulte em forma de inúmeros fios. É um queijo compacto e duro, de cor amarelada e aroma agradável. Costuma ser comercializado em forma de cilindro. Tem longa duração, à volta de um ano.";
});

document.getElementById("ButtonParmesao").addEventListener("click", () => {
    img.src = "/assets/Parmesão.jpg";
    descricao.textContent = "O parmesão é um tipo de queijo italiano, com denominação de origem controlada conhecida como Parmigiano-Reggiano. Devido a sua popularidade na culinária, este tipo de queijo foi copiado e é produzido em regiões com presença de colônias italianas como o Brasil e os Portugal , o que tem gerado disputas legais quanto ao uso da marca.";
});

document.getElementById("ButtonMuçarela").addEventListener("click", () => {
    img.src = "/assets/Muçarela.jpg";
    descricao.textContent = "A muçarela é uma variedade de queijo brasileiro, conhecida por sua textura cremosa e sabor suave. É frequentemente usada em saladas e pratos quentes.";
});

document.getElementById("ButtonModal").addEventListener("click", () => {
    modal.style.display = "flex"
});

document.getElementById("ButtonFechar").addEventListener("click", () => {
    modal.style.display = "none"
});