db.produtos.updateMany(
  {},
  { $push: { tags: { $each: ["combo", "tasty"], $sort: 1 } } },
  { upset: true },
);

db.produtos.find(
  {},
  { nome: 1, tags: 1, _id: 0 },
);
