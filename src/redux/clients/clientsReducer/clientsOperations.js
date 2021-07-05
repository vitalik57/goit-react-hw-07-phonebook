import axios from "axios";
import { addALLClients, addClient, deleteClient, setError, setLoading } from "./clientsAction";

const addALLClientsOperations = () => async (dispatch, getState) => {
  dispatch(setLoading());
  try {
    const response = await axios.get(`https://project-shop-8af1e-default-rtdb.firebaseio.com/clients.json`);
    if (response.data) {
      const contactsObj = Object.keys(response.data).map(key => ({
        ...response.data[key],
        id: key
      }));

      console.log(contactsObj);
      dispatch(addALLClients(contactsObj));
      // this.setState({ contacts: contactsObj });
    } else return;
  } catch (error) {
    console.dir(error.response.data.error);
    dispatch(setError(error.response.data.error));
  } finally {
    dispatch(setLoading());
  }
};

const addClientOperation = client => async (dispatch, getState) => {
  dispatch(setLoading());
  try {
    const response = await axios.post(`https://project-shop-8af1e-default-rtdb.firebaseio.com/clients.json`, client);
    dispatch(addClient({ ...client, id: response.data.name }));
    // this.setState((prevState) => ({
    //   contacts: [
    //     ...prevState.contacts,
    //     { ...client, id: response.data.name },
    //   ],
    // }));
  } catch (error) {
    console.dir(error.response.data.error);
    dispatch(setError(error.response.data.error));
  } finally {
    dispatch(setLoading());
  }
};

const deleteClientOperation = id => async (dispatch, getState) => {
  dispatch(setLoading());
  try {
    await axios.delete(`https://project-shop-8af1e-default-rtdb.firebaseio.com/clients/${id}.json`);
    dispatch(deleteClient(id));
    // this.setState({
    //   contacts: this.state.contacts.filter((el) => el.id !== id),
    // });
  } catch (error) {
    console.dir(error.response.data.error);
    dispatch(setError(error.response.data.error));
  } finally {
    dispatch(setLoading());
  }
};

export { addALLClientsOperations, addClientOperation, deleteClientOperation };
