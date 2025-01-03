const mockResponse = {
  products: [
    {
      id: 1,
      title: 'Essence Mascara Lash Princess',
    },
    {
      id: 2,
      title: 'Eyeshadow Palette with Mirror',
    },
    {
      id: 3,
      title: 'Powder Canister',
    },
    {
      id: 4,
      title: 'Red Lipstick',
    },
  ],
  total: 194,
  skip: 0,
  limit: 30,
}

const fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(mockResponse) })
)

export default fetch
