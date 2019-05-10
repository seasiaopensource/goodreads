const setToken = token => localStorage.setItem('token', token);
const setAdminToken = tokenAdmin => localStorage.setItem('tokenAdmin', tokenAdmin);
// const setUserId = userId => localStorage.setItem('userId', userId);
// const userId = localStorage.getItem('userId');
const getToken = () => localStorage.getItem('token');
const adminToken = () => localStorage.getItem('tokenAdmin');
const getTokenFromCookies = async (cookies) => {
  const token = await cookies.get('accesstoken');
  const adminToken = await cookies.get('adminaccesstoken');
  await setToken(token);
  await setAdminToken(adminToken);
};

const getId = arrayList => (arrayList !== undefined ? arrayList.map(iteam => `${iteam.id}`) : '');

const getImageUrl = (arrayList, data) => (arrayList !== undefined ? arrayList.map(iteam => `${iteam[data]}`) : '');

const getImageUrlFilter = (arrayList, data, id) => {
  const listOfArray = [];
  if (arrayList.length > 0) {
    arrayList.map((iteam) => {
      if (iteam.productId === id) {
        listOfArray.push(`${iteam[data]}`);
      }
      return true;
    });
  }
  return listOfArray;
};

const getArrayList = (arrayList, data) => {
  const listOfArray = [];
  if (arrayList.length > 0) {
    arrayList.map(iteam => listOfArray.push({ [data]: `${iteam[data]}` }));
  }
  return listOfArray;
};

const calculatePrice = (price, discount) => (price * (100 - Number.parseInt(discount, 10))) / 100;

const listArrayData = (id, data) => {
  const listOfArray = [];
  if (data.length > 0) {
    id.split(',').map((id) => {
      const index = data.findIndex(p => p.value === id);
      if (index !== -1) {
        listOfArray.push({ id, label: data[data.findIndex(p => p.value === id)].label });
      }
      return true;
    });
  } return listOfArray;
};

export {
  getToken,
  adminToken,
  getTokenFromCookies,
  setAdminToken,
  getId,
  getImageUrl,
  calculatePrice,
  listArrayData,
  getArrayList,
  getImageUrlFilter,
};
