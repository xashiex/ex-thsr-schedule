export const columns = [
  { key: 'trainNo', sortable: false },
  { key: 'originTime', sortable: true },
  { key: 'destinationTime', sortable: true },
  { key: 'duration', sortable: true},
  { key: 'price', sortable: true}
];

export const head = {
  trainNo: { text: '車次' },
  originTime: { text: '出發時間' },
  destinationTime: { text: '到達時間' },
  duration: { text: '行車時間' },
  price: { text: '票價' }
}

export const body = [
  {
    key: '111',
    trainNo: { value: '111' },
    originTime: { value: 111, text: '1:11' },
    destinationTime: { value: 122, text: '1:22' },
    duration: { value: 133, text: '1:33' },
    price: { value: 100, text: '$100' }
  },
  {
    key: '222',
    trainNo: { value: '222' },
    originTime: { value: 211, text: '2:11' },
    destinationTime: { value: 222, text: '2:22' },
    duration: { value: 233, text: '2:33' },
    price: { value: 10, text: '$10' }
  },
]