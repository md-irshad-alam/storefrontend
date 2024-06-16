import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart } from 'react-icons/fi';
import { FaFlask } from 'react-icons/fa';
import { IoMdContacts } from 'react-icons/io';
import { CgScreen } from 'react-icons/cg';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { FaUsersBetweenLines } from 'react-icons/fa6';
export const Links = [
  {
    title: 'Stock',
    links: [
      {
        name: 'stock-list',
        sendto: 'stock_list',
      },
    ],
  },
  {
    titleIcon: <FaUsersBetweenLines />,
    title: 'Employee',
    links: [
      {
        name: 'Employee',
        sendto: 'employee',
      },
      {
        name: 'Employee List',
        sendto: 'employeelist',
      },
      {
        name: 'Employee Category',
        sendto: 'add_employee_cato',
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
        name: 'Curency',
        sendto: 'curency ',
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
      {
        name: 'Login',
        sendto: 'newLogin',
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
