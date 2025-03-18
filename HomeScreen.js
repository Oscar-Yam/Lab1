import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import data from './data.json';


// const HomeScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome to the Home Screen!</Text>
//       </View>
//       );
//     };

// const HomeScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Todo List (For Loop)</Text>
//       {(() => {
//         const items = [];
//         for (let i = 0; i < data.length; i++) {
//           const item = data[i];
//           const date = new Date(data[i].createdAt);
//           const fomatedDate = date.toLocaleDateString();
//           const fomatedTime = date.toLocaleTimeString();
//           items.push(
//             <View key={item._id} styles={styles.itemContainer}>
//               <Text styles={styles.title}>{data[i].header}</Text>
//               <Text styles={styles.description}>{data[i].description}</Text>
//               <Text>By: {data[i].user} - Comments: {data[i].commentCount}</Text>
//               <Text>{fomatedDate} {fomatedTime}</Text>
//             </View>
//           );
//         }
//         return items;
//       })()}
//     </View>
//   );
// };

// const HomeScreen = () => {
//   const items = [];
//   for (let i = 0; i < data.length; i++) {
//     const item = data[i];
//     const date = new Date(data[i].createdAt);
//     const fomatedDate = date.toLocaleDateString();
//     const fomatedTime = date.toLocaleTimeString();
//     items.push(
//       <View key={item._id} styles={styles.itemContainer}>
//         <Text styles={styles.title}>{data[i].header}</Text>
//         <Text styles={styles.description}>{data[i].description}</Text>
//         <Text>By: {data[i].user} - Comments: {data[i].commentCount}</Text>
//         <Text>{fomatedDate} {fomatedTime}</Text>
//       </View>
//       );
//     }
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Todo List (For Loop)</Text>
//       {items}
//     </View>
//   );
// };

// const HomeScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Todo List (map)</Text>
//       {data.map((item)=>{
//         const date = new Date(item.createdAt);
//         const fomatedDate = date.toLocaleDateString();
//         const fomatedTime = date.toLocaleTimeString();
//         return(
//           <View key={item._id} styles={styles.itemContainer}>
//             <Text styles={styles.title}>{item.header}</Text>
//             <Text styles={styles.description}>{item.description}</Text>
//             <Text>By: {item.user} - Comments: {item.commentCount}</Text>
//             <Text>{fomatedDate} {fomatedTime}</Text>
//           </View>
//           );
//       })}
//     </View>
//   );
// };

const HomeScreen = () => {
  const renderItem = ({ item }) => {
    const date = new Date(item.createdAt);
    const fomatedDate = date.toLocaleDateString();
    const fomatedTime = date.toLocaleTimeString();
    return(
      <View key={item._id} style={styles.itemContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.meta}>By: {item.user} - Comments: {item.commentCount}</Text>
      <Text style={styles.meta}>{fomatedDate} {fomatedTime}</Text>
      </View>
      );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo List (FlatList)</Text>
      {
        <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item)=>item._id}
        />
      }
    </View>
  );
};


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//   },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  itemContainer: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    marginVertical: 5,
  },
  meta: {
    fontSize: 12,
    color: '#666',
  },
});


export default HomeScreen;