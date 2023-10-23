import { useMemo } from 'react'

type UseFormatterProps = {
  rawCardNo: string
  rawCCV: string
  rawValidThru: string
}
export const useFormatter = (props: UseFormatterProps) => {
  const { rawCardNo, rawCCV, rawValidThru } = props

  const cardNo = useMemo(() => {
    const r = /\b(?:\d{4}[ -]?){3}(?=\d{4}\b)/gm
    const subst = `**** **** **** `
    return rawCardNo
      .replace(/[^0-9]/g, '')
      .substring(0, 19)
      .replace(r, subst)
  }, [rawCardNo])

  const CCV = useMemo(() => {
    return rawCCV.replace(/[^0-9]/g, '').substring(0, 4)
  }, [rawCCV])

  const validDate = useMemo(() => {
    return rawValidThru
      .replace(/[^0-9]/g, '')
      .substring(0, 5)
      .replace(/^([1-9]\/|[2-9])$/g, '0$1/')
      .replace(/^(0[1-9]|1[0-2])$/g, '$1/')
      .replace(/^([0-1])([3-9])$/g, '0$1/$2')
      .replace(/^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2')
      .replace(/^([0]+)\/|[0]+$/g, '0')
      .replace(/[^\d\\/]|^[\\/]*$/g, '')
      .replace(/\/\//g, '/')
  }, [rawValidThru])

  return { cardNo, CCV, validDate }
}
