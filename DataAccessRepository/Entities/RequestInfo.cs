﻿using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessRepository.Entities
{
    class RequestInfo
    {

        public int RequestId { get; set; }
        public int ProjectId { get; set; }
        public string EmployeeName { get; set; }  
        public string EmployeeId { get; set; }
        public string ManagerId { get; set; }
        public string ManagerName { get; set; }
        public DateTime TravelStart { get; set; }
        public DateTime TravelReturn { get; set; }
        public string TravelCountry { get; set; }
        public string RequestStatus { get; set; }
        public string Approver { get; set; }
       
    }
}
