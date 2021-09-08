const delay = 300;
const user = {
  name: 'Mango',
  email: 'mango@mail.com',
  avatar:
    'https://www.pngkey.com/png/full/353-3534482_avatar-portfolio-02-avatar-sketch-cartoon-avatar.png',
};

const fetchUser = () => {
  return new Promise(resolve => setTimeout(() => resolve(user), delay));
};

export default { fetchUser };
