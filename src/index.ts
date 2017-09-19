console.log('Hello!');

type Name = { name: string };
type NamePlus = { name: string, hair: string };

type ReturnType = { foo: Name, bar: NamePlus };

export async function test(): Promise<ReturnType> {
  const myName: Name = { name: 'Tom' };
  const myNamePlus: NamePlus = { name: 'Larry', hair: 'black' };

  const result = await Promise.all([myName, myNamePlus]);

  return {
    foo: result[0],
    bar: result[1],
  };
}
