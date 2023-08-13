import React from 'react'
import PopupHeader from './popupHeader'
import SoliderForm from './soliderForm'
import SelectBox from './selectBox'
import SolidersList from './solidersList'



export default function Soliders() {
  return (
      <div className='solider--container'>
      <div className='close-box'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 56 56" fill="none">
      <path d="M41.9238 14.372C43.2027 15.6289 43.2027 17.6666 41.9238 18.9235L32.661 28.0262L41.9238 37.1295C43.2027 38.3863 43.2027 40.4241 41.9238 41.681C40.6449 42.9378 38.5714 42.9378 37.2925 41.681L28.0298 32.5776L18.7671 41.681C17.4882 42.9378 15.4147 42.9378 14.1358 41.681C12.8568 40.4241 12.8568 38.3863 14.1358 37.1295L23.3986 28.0262L14.1358 18.9235C12.8568 17.6666 12.8568 15.6289 14.1358 14.372C15.4147 13.1151 17.4882 13.1151 18.7671 14.372L28.0298 23.4749L37.2925 14.372C38.5714 13.1151 40.6449 13.1151 41.9238 14.372Z" fill="#555555"/>
      </svg></div>
      <PopupHeader></PopupHeader>
      <SoliderForm></SoliderForm>
      <SelectBox></SelectBox>
      <SolidersList></SolidersList>
    </div>
  )
}
