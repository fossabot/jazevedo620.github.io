import React from 'react'
import classNames from 'classnames'
import { isNil } from 'lodash'

import { Link } from 'gatsby'
import Icon from '../Icon'

class LinkButton extends React.Component {
  render() {
    const { useLink } = this.props

    const LinkContent = (icon, iconClass, text) =>
      !isNil(icon)
        ? [LinkIcon(icon, iconClass), LinkText(text)]
        : LinkText(text)
    const LinkText = text => <span key="label">{text}</span>
    const LinkIcon = (icon, iconClass) => (
      <Icon key="icon" className={classNames('mr-2', iconClass)} name={icon} />
    )
    const renderFunc = {
      Link: ({
        href,
        text,
        icon,
        iconClass,
        disabled,
        className,
        newTab,
        external,
        children,
        useLink,
        noLink,
        ...rest
      }) => {
        const props = {
          disabled: disabled,
          to: href,
          activeClassName: 'active',
          partiallyActive: true,
          className: className,
        }
        return (
          <Link {...props} {...rest}>
            {LinkContent(icon, iconClass, text)}
            {children}
          </Link>
        )
      },

      a: ({
        href,
        text,
        icon,
        iconClass,
        disabled,
        className,
        newTab,
        external,
        children,
        useLink,
        noLink,
        ...rest
      }) => {
        const props = {
          disabled: disabled,
          href: href,
          className: className,
        }
        const targetNewTab = newTab === true || (external && newTab !== false)
        if (targetNewTab) props.target = '_blank'
        if (external) props.rel = 'noopener'
        return (
          <a {...props} {...rest}>
            {LinkContent(icon, iconClass, text)}
            {children}
          </a>
        )
      },
    }

    return useLink ? renderFunc.Link(this.props) : renderFunc.a(this.props)
  }
}

export default LinkButton
