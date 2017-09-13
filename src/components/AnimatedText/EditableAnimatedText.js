import React from 'react'
import { EditInline, createEditable } from 'tux'
import AnimatedText from './index'

// Tux will soon support the following pattern:

// <EditInline field="fields.content.tagline">
//  {(value) => <AnimatedText>{value}</AnimatedText>}
// </EditInline>

// In the meantime we use a workaround.

const EditableAnimatedText = ({ isEditing, children, field, placeholder,...props }) =>
  isEditing ? (
    <EditInline field={field} placeholder={placeholder} />
  ) : (
    <AnimatedText {...props}>{children || ''}</AnimatedText>
  )

export default createEditable()(EditableAnimatedText)
