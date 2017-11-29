import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'

const { API_URL, S3_URL } = process.env

export default {
  plugins: [
    replace({ API_URL, S3_URL }),
    resolve()
  ]
}
