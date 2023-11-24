import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart } from 'react-icons/fi';
import { FaFlask } from 'react-icons/fa';
import { IoMdContacts } from 'react-icons/io';
import { CgScreen } from 'react-icons/cg';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';

export const Links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'ecommerce',
        // icon: <FiShoppingBag />,
      },
    ],
  },

  {
    titleIcon: <CgScreen />,
    title: 'Master',
    links: [
      {
        name: 'Orders',
        sendto: 'orders',
      },
      {
        name: 'Login',
        sendto: 'login',
      },
      {
        name: 'Register',
        sendto: 'register',
      },
      {
        name: 'Employee',
        sendto: 'employee',
      },
      {
        name: 'Employee List',
        sendto: 'employeelist',
      },
      // Products

      {
        name: 'Product',
        sendto: 'product',
      },
      {
        name: 'Product List',
        sendto: 'productlist ',
      },
      {
        name: ' View Product',
        sendto: 'view_product ',
      },
      {
        name: 'Add Module',
        sendto: 'add_module ',
      },
      {
        name: 'Add Category',
        sendto: 'add_category ',
      },
      // Category
      {
        name: 'Category Type',
        sendto: 'category_type ',
      },
      {
        name: 'Category List',
        sendto: 'category_List ',
      },
      // weight
      {
        name: 'Add Weight',
        sendto: 'add_weight ',
      },
      {
        name: 'Store',
        sendto: 'store ',
      },
      {
        name: 'Group Master',
        sendto: 'grpmaster ',
      },
      {
        name: 'Color',
        sendto: 'color ',
      },
      {
        name: 'Country',
        sendto: 'country ',
      },
      {
        name: 'Heel',
        sendto: 'heel ',
      },
      {
        name: 'UOM',
        sendto: 'uom ',
      },
      {
        name: 'Group',
        sendto: 'group ',
      },
      {
        name: 'Designation',
        sendto: 'designation ',
      },
      {
        name: 'State',
        sendto: 'state ',
      },

      // Customers
      {
        name: 'Customers',
        sendto: 'customers',
      },
      {
        name: 'Add ForePart',
        sendto: 'forpart',
      },
    ],
  },
  {
    titleIcon: <FaFlask />,
    title: 'Mixing',
    links: [
      {
        name: 'Add Product Category',
        sendto: 'add_category',
      },
      {
        name: 'Product Category List',
        sendto: 'category_list',
      },
      {
        name: 'Ingredient',
        sendto: 'gredient',
      },
      {
        name: 'Type',
        sendto: 'category_type',
      },
    ],
  },
];
