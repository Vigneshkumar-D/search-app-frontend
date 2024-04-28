import React, {useState } from "react";
import { Table, Input, Button, Spin, Select, Space, message} from "antd";
import "./search-bar.css";
import {BsSearch} from 'react-icons/bs'

function SearchBar() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [selectedQueryParam, setSelectedQueryParam] = useState("details");
  const [showErrMsg, setShowErrMsg] = useState(false);
  const options = [
    { label: 'Name', value: 'name' },
    { label: 'Age', value: 'age' },
    { label: 'Email', value: 'email' },
    { label: 'Country', value: 'country' },
    { label: 'Mobile', value: 'mobile' }
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(selectedQueryParam !== "details" && query.length!==0){
        setIsLoading(true);
        setShowErrMsg(false);
        const fetchData = async () => {
            const url = `http://localhost:4000/user-details?${selectedQueryParam}=${query}`
            try {
              const response = await fetch(url);
              if (!response.ok) {
                setIsLoading(false);
                throw new Error("Network response was not ok");
              } else {
                setIsLoading(false);
                const jsonData = await response.json();
                setDataSource(jsonData);
              }
            } catch (error) {
                message.error(error)
            }
            
        }
        fetchData();
    }else{
        setShowErrMsg(true);
    }
  };

  const handleChange = (value) => {
    setSelectedQueryParam(value);
  }

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width:"15%"
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      width:"10%"
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
      width:"15%"
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
      key: "mobile",
      width:"15%"
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width:"25%"
    },
  ];

  return (
    <div className="search-app-main-container">
        <div  className="search-app-main-container1">
            <div>
                <h2 className="heading">DataSearch Pro</h2>
                <p className="description">Your Comprehensive Data Search App</p>
            </div>
            <div className="search-app-sub-container">
                <form className="form" onSubmit={handleSubmit}>
                <Space
                    style={{
                    //   width: "15%",
                    }}
                    direction="horizontal"
                >
                    {/* <Tag style={{background: 'transparent', border: 'none'}}>Search By:</Tag> */}
                    <Select
                    allowClear
                    style={{
                        minWidth: "100%",
                    }}
                    placeholder="Search By"

                    onChange={handleChange}
                    options={options}
                    />
                </Space>
                <Input
                    type="text"
                    className="search-input"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder = {`Enter ${selectedQueryParam} to search`}
                />
                <Button className="search-button" htmlType="submit">
                  <BsSearch className="search-icon" />
                </Button>
                </form>    
            </div>
        </div>
        {showErrMsg && <p className="err-message">Please select any one option!</p>}
        <div className="table-container">
          {isLoading ? (
            <Spin style={{ alignSelf: "center" }} />
          ) : (
            <Table
              className="table"
              style={{ alignSelf: "center", width: "80%",'@media (max-width: 767px)': {
                width: "100%",
              }}}
              dataSource={dataSource}
              columns={columns}
            />
          )}
       
        </div>
    </div>
  );
}

export default SearchBar;
