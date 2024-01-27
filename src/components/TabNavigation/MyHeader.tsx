import React,{useEffect,useState} from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Badge, Surface, Text, Title } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../TabNavigation/Colors';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
interface AppHeaderProps {
  style?: any;
  menu?: boolean;
  onPressMenu?: () => void;
  back?: boolean;
  onPressBack?: () => void;
  title?: string;
  right?: string;
  rightComponent?: React.ReactNode;
  onRightPress?: () => void;
  optionalBtn?: string;
  optionalBtnPress?: () => void;
  headerBg?: string;
  iconColor?: string;
  titleAlign?: 'left' | 'center' | 'right'; // Adjust the possible values as needed
  optionalBadge?: string;
}

const IconSize = 24;


const AppHeader: React.FC<AppHeaderProps> = (
  {
  style,
  menu,
  onPressMenu,
  back,
  onPressBack,
  title,
  right='',
  rightComponent,
  onRightPress,
  optionalBtn,
  optionalBtnPress,
  headerBg = "white",
  iconColor = 'black',
  titleAlign='center',
  optionalBadge,
 
}) => {
  useEffect(()=>{
   getProfile()
  })
  const [photo, setPhoto] = useState<string | undefined>(undefined);

const getProfile = async () => {
  const data = await auth().currentUser;
  console.log("The current user is:", data)
  if (data) {
    setPhoto(data?.photoURL || undefined);
  } else {
    return null;
  }
};
  const LeftView = () => (
    <View style={styles.view}>
      {menu && <TouchableOpacity onPress={onPressMenu}>
        <Feather name="menu" size={IconSize} color={iconColor} />
      </TouchableOpacity>}
      {back && <TouchableOpacity onPress={onPressBack}>
        <Feather name="arrow-left" size={IconSize} color={iconColor} />
      </TouchableOpacity>}
    </View>
  )
  const RightView = () => (
   
    rightComponent ? rightComponent :
      <View style={[styles.view, styles.rightView]}>
        {optionalBtn && <TouchableOpacity style={styles.rowView} onPress={optionalBtnPress}>
          <Feather name={optionalBtn} size={IconSize} color={iconColor} />
          {optionalBadge && <Badge style={{ position: 'absolute', top: -5, right: -10 }}>{optionalBadge}</Badge>}
        </TouchableOpacity>}
        {right !== '' && <TouchableOpacity onPress={onRightPress}>
          {/* profile */}
          <Image source={photo ? { uri: photo } : require('../../assets/profile.png')} style={styles.profileImage}/>
        </TouchableOpacity>}
      </View>
  )
  const TitleView = () => (
    <View style={[styles.titleView]}>
      <Title style={{ color: iconColor }}>{title}</Title>
    </View>
  )
  return (
    <Surface style={[styles.header, style, { backgroundColor: headerBg }]}>
      <LeftView />
      <TitleView />
      <RightView />
    </Surface>
  )
}

export default AppHeader;

const styles = StyleSheet.create({
  header: {
    height: 50,
    elevation: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  view: {
    marginHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row',
  },
  titleView: {
    flex: 1,
  },
  rightView: {
    justifyContent: 'flex-end',
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  profileImage: {
    display: 'flex',
    width: 40.95,
    height: 39,
    padding: 4.34,
    paddingTop: 0, // Remove top padding
    paddingRight: 4.095,
    paddingBottom: 0, // Remove bottom padding
    paddingLeft: 4.095,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    borderRadius: 100,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
})
