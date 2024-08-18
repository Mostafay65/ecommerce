import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../Helpers/Spinner";
import styles from './Messages.module.css'

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [modal, setModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  async function getMessages() {
    setLoading(true);
    let { data } = await axios.get(`http://localhost:4000/Messages`);
    setMessages(data);
    setFilteredMessages(data); 
    setLoading(false);
  }

  async function deleteMessage(id) {
    await axios.delete(`http://localhost:4000/Messages/${id}`)
    getMessages()
  }

  function handleViewClick(message){
    setSelectedMessage(message);
    setModal(true);
  }

  function handleReset(){
    setSearchTerm(''); 
  }

  useEffect(() => {
    getMessages();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      setFilteredMessages(
        messages.filter((item) =>
          item.subject.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    } else {
      setFilteredMessages(messages); 
    }
  }, [searchTerm, messages]);


  return (
    <>
      <div className={`${modal&& `${styles.allusers}`} bg-gray px-md-5 py-5`}>
        {loading && <Spinner />}
        <div className="container-fluid px-md-5 px-2 py-5">
          <div className="title mb-3 d-flex justify-content-between">
            <h2>
              Total Messages: <span className="text-main">{filteredMessages.length}</span>
            </h2>
            <div className="filter d-flex justify-content-end w-25">
              <input
                type="text"
                className="border-0 w-100 rounded-2 p-2"
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Filter By Subject"
                value={searchTerm}
              />
              <button
                className="btn btn-main"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </div>

          <table className="tablee rounded-3">
            <thead>
              <tr className="text-center">
                <th className="py-2">Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Subject</th>
                <th>Message</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {filteredMessages?.map((message) => (
                <tr key={message.id}>
                  <td>{message.firstName}</td>
                  <td>{message.email}</td>
                  <td>{message.phone}</td>
                  <td>{message.subject}</td>
                  <td>
                    <button
                      className="btn bg-main text-white"
                      onClick={() => handleViewClick(message)}
                    >
                      View
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-danger px-2" onClick={()=>deleteMessage(message.id)}><i className="fas fa-trash-can text-white"></i></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {modal && (
        <>
          <div className={`${styles.overlay} position-fixed top-0 left-0 w-100 vh-100`} onClick={() => setModal(false)}>
          </div>
          <div className={`${styles.allModal} py-4 px-3 position-fixed text-main top-50 start-50 translate-middle bg-white z-3`}>
            <i className="fas fa-x position-absolute text-sec end-0 me-3" onClick={() => setModal(false)}></i>
            <h4>{selectedMessage?.subject}</h4>
            <hr />
            <p className="text-sec">{selectedMessage?.message}</p>
          </div>
        </>
      )}
    </>
  );
};

export default Messages;
