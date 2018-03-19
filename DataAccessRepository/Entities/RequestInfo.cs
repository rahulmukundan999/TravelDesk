﻿using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessRepository.Entities
{
    public class RequestInfo
    {

        public RequestInfo()
        {

            FlightInfo = new List<FlightInfo>();
            HotelInfo = new List<HotelInfo>();
        }
        public int Id { get; set; }
        public string ProjectId { get; set; }
        public string EmployeeName { get; set; }  
        public string EmployeeId { get; set; }
        public string ManagerId { get; set; }
        public string ManagerName { get; set; }
        public DateTime TravelStart { get; set; }
        public DateTime TravelReturn { get; set; }
        public string TravelCountry { get; set; }
        public string RequestStatus { get; set; }
        public string Approver { get; set; }

        public List<FlightInfo> FlightInfo { get; set; }
        public List<HotelInfo> HotelInfo { get; set; }

    }
}
