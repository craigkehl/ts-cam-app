const BASEURL: string = 'http://192.168.108.2:4000'

export const recallPreset = async (presetId: string) => {
  // console.log(`${BASEURL}/preset/${presetId}`)
  try {
    const response = await fetch(`${BASEURL}/preset/${presetId}`)
    if (!response.ok) {
      throw new Error('Preset not executed!')
    } else {
      return true
    }
  } catch (error) {
    console.log('Error: ' + error.message)
  }
}

export const zoom = async (speed: string) => {
  console.log(`${BASEURL}/zoom/${speed}`)
  try {
    const response = await fetch(`${BASEURL}/zoom/${speed}`)
    if (!response.ok) {
      throw new Error('Zoom not executed!')
    } else {
      return true
    }
  } catch (error) {
    console.log('Error: ' + error.message)
  }
}

export const move = async (pan: string, tilt: string) => {
  console.log(`${BASEURL}/move/pan=${pan}&tilt=${tilt}`)
  try {
    const response = await fetch(`${BASEURL}/move/?pan=${pan}&tilt=${tilt}`)
    if (!response.ok) {
      throw new Error('Move not executed!')
    } else {
      return true
    }
  } catch (error) {
    console.log('Error: ' + error.message)
  }
}

export const recallScenes = async (scene: string) => {
  console.log(`${BASEURL}/scene/${scene}`)
  try {
    const response = await fetch(`${BASEURL}/scene/${scene}`)
    if (!response.ok) {
      throw new Error('scene not executed!')
    } else {
      return true
    }
  } catch (error) {
    console.log('Error: ' + error.message)
  }
}