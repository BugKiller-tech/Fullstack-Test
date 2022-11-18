/**
 * Server Side Model
 */

export interface Recipe {
  id: number;
  name: string;
  slug: string;
  category: string;
  description: string;
  preparation: string;
  bake: string;
  total: string;
  yield: string;
  image: string;
}
