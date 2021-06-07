import React from "react"
import { connect } from "react-redux"
import { UserMenu, MenuItemLink } from "react-admin"
import SettingsIcon from "@material-ui/icons/Settings"

const MyUserMenuView = ({ ...props }) => {
  return (
    <UserMenu label={"Mis Datos"} {...props}>
      <MenuItemLink
        to="/profile"
        primaryText={"Mis Datos"}
        leftIcon={<SettingsIcon />}
      />
    </UserMenu>
  )
}

const MyUserMenu = connect()(MyUserMenuView)
export default MyUserMenu
