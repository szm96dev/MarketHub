import * as Yup from 'yup';

// User Schemas
export const loginSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

// Register schema aligned with RegisterForm fields
export const registerSchema = Yup.object({
  firstname: Yup.string().min(1, 'First name is required').max(50, 'Max 50 characters').required('First name is required'),
  lastname: Yup.string().min(1, 'Last name is required').max(50, 'Max 50 characters').required('Last name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  username: Yup.string().min(3, 'Username must be at least 3 characters').max(30, 'Max 30 characters').matches(/^[a-zA-Z0-9_]+$/, 'Letters, numbers and underscores only').required('Username is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm password is required'),
  phone: Yup.string().required('Phone number is required'),
});

export const profileUpdateSchema = Yup.object({
  firstname: Yup.string().min(1, 'First name is required').max(50, 'Max 50 characters').required('First name is required'),
  lastname: Yup.string().min(1, 'Last name is required').max(50, 'Max 50 characters').required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone is required'),
  address: Yup.object({
    city: Yup.string().required('City is required'),
    street: Yup.string().required('Street is required'),
    number: Yup.string().required('Number is required'),
    zipcode: Yup.string().required('Zipcode is required'),
  }),
});

// Product Schemas
export const productSchema = Yup.object({
  name: Yup.string()
    .min(1, 'Product name is required')
    .max(200, 'Product name must be less than 200 characters')
    .required('Product name is required'),
  description: Yup.string()
    .min(1, 'Description is required')
    .max(2000, 'Description must be less than 2000 characters')
    .required('Description is required'),
  price: Yup.number()
    .min(0, 'Price must be positive')
    .required('Price is required'),
  category: Yup.string()
    .min(1, 'Category is required')
    .max(100, 'Category must be less than 100 characters')
    .required('Category is required'),
  stock: Yup.number()
    .min(0, 'Stock must be non-negative')
    .required('Stock is required'),
  brand: Yup.string()
    .max(100, 'Brand must be less than 100 characters'),
  sku: Yup.string()
    .max(50, 'SKU must be less than 50 characters'),
  weight: Yup.number()
    .min(0, 'Weight must be positive'),
  dimensions: Yup.object({
    length: Yup.number().min(0, 'Length must be positive'),
    width: Yup.number().min(0, 'Width must be positive'),
    height: Yup.number().min(0, 'Height must be positive'),
  }),
});


// Form Initial Values
export const initialValues = {
  login: {
    email: '',
    password: '',
  },
  register: {
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: {
      city: '',
      street: '',
      number: '',
      zipcode: '',
    },
  },
  profile: {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    address: {
      city: '',
      street: '',
      number: '',
      zipcode: '',
    },
  },
  product: {
    name: '',
    description: '',
    price: 0,
    category: '',
    stock: 0,
    brand: '',
    sku: '',
    weight: 0,
    dimensions: {
      length: 0,
      width: 0,
      height: 0,
    },
  },
};

// Helpers
export const buildProfileInitialValues = (user) => ({
  firstname: user?.name?.firstname || '',
  lastname: user?.name?.lastname || '',
  email: user?.email || '',
  phone: user?.phone || '',
  address: {
    city: user?.address?.city || '',
    street: user?.address?.street || '',
    number: user?.address?.number || '',
    zipcode: user?.address?.zipcode || '',
  },
});

// Type definitions




