import { ADD_ORDER } from "./actionsTypes";

// Define types for your state
interface OrderItem {
  id: number;
  name: string;
  quantity: number;
  cost: number;
  // Add other properties as needed
}

interface Customer {
  id: number;
  name: string;
  // Add other properties as needed
}

interface OrderState {
  order: {
    items: OrderItem[];
    customer: Customer;
  };
}

// Define types for your actions
interface AddOrderAction {
  type: typeof ADD_ORDER;
  payload: {
    customer: Customer;
    cartItems: OrderItem[];
  };
}

// Create a union type for all possible actions
type OrderActionTypes = AddOrderAction; // Add other action types as needed

// Initialize your state
const initialState: OrderState = {
  order: {
    items: [],
    customer: { id: 0, name: '' }, // Provide default values or adjust as needed
  },
};

// Define your reducer function
export default function orderReducer(
  state: OrderState = initialState,
  action: OrderActionTypes
): OrderState {
  switch (action.type) {
    case ADD_ORDER:
      return {
        ...state,
        order: { customer: action.payload.customer, items: action.payload.cartItems },
      };
    default:
      return state;
  }
}
