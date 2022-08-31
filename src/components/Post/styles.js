import {StyleSheet, Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  videoPlayButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 100,
  },
  container: {
    width: '100%',
    height: windowHeight - (windowHeight % 40),
  },
  uiContainer: {
    height: '100%',
    justifyContent: 'flex-end',
  },

  bottomContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  handle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },
  description: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '300',
    marginBottom: 10,
  },
  songRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  songName: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '300',
    marginLeft: 5,
  },
  songImg: {
    width: 40,
    height: 40,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: '#4c4c4c',
  },
  rightContainer: {
    alignSelf: 'flex-end',
    height: 300,
    justifyContent: 'space-between',
    marginRight: 5,
  },
  pp: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
  },
  statsLabel: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '300',
  },
  iconContainer: {
    alignItems: 'center',
    marginTop: 5,
  },
});

export default styles;
