import axios from 'axios'

const API_URL = '/api/tickets/'

// Create new ticket
const createTicket = async (ticketData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, ticketData, config)
//   console.log(response.data);
  return response.data
}



// get user tickets
const getTickets = async (token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.get(API_URL, config)
  //   console.log(response.data);
    return response.data
  }

const ticketService = {
  createTicket,
  getTickets
};

export default ticketService;
