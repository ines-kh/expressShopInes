const { getProductById, checkStock } = require('../../src/catalog/catalogService');

test('getProductById résout la promesse avec le produit correspondant', async () => {

  const product = await getProductById(1);
//en utilise toEqual avec les objet
  expect(product).toEqual({
    id: 1,
    name: 'Casque Bluetooth',
    category: 'audio',
    price: 89.9,
    stock: 12,
  });
});

test('getProductById rejette la promesse pour un id inconnu', async () => {
//on va verifier si la fonction a reellement fait une recherche dans la base de donnee ou nn

  expect.assertions(1);

//.rejects verifier si un promess a echoué 

  await expect(getProductById(8)).rejects.toThrow('Produit introuvable : 8');
});

//.resolves verifier si un promess a reussie 
test('checkStock résout la promesse avec false si le stock est insuffisant', async () => {
  //check si le produit d'id 2 se trouve qte 1 dans la base de donnee
  await expect(checkStock(2, 1)).resolves.toBe(false);
});

