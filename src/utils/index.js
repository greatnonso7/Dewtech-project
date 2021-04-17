export const getModelKeys = (model: any) =>
  Object.keys(model.effects({})).map(a => `${model.name}/${a}`);
