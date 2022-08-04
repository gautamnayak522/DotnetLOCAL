﻿using HospitalManagementAPI.Interfaces;
using HospitalManagementAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HospitalManagementAPI.Services
{
    public class UserService : Repository<User>, IUser
    {
        public UserService(HospitalManagementContext hospitalManagementContext) : base(hospitalManagementContext)
        {

        }
    }
}
