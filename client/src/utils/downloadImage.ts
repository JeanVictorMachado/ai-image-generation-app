import FileSaver from 'file-saver'

export async function downloadImage(_id: string, photo: string | Blob) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`)
}
