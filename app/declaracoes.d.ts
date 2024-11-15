// Como o TS não reconhece por padrão que pode importar esses tipos de arquivo, tivemos que criar esse arquivo para definir isso.
// Meio que declarando que podemos exportar. Sendo assim, conseguimos importar as imagens em app/constantes/icones_imagens.ts
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.svg";
