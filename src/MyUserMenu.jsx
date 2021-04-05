import React, { Component, useEffect, useState } from 'react'
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { crudGetOne, UserMenu, MenuItemLink } from 'react-admin';
import SettingsIcon from '@material-ui/icons/Settings';


const MyUserMenuView=({ ...props } )=>{


  return(    <UserMenu label={'Mis Datos'} {...props}>
      <MenuItemLink
        to="/profile"
        primaryText={'Mis Datos'}
        leftIcon={<SettingsIcon />}
      />
    </UserMenu>

  )
}





const MyUserMenu =connect()(MyUserMenuView);
export default MyUserMenu;
