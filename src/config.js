export const addVocabulary = ({ course, data }) => {
  if (localStorage.getItem('vocabulary')) {
    const vocabularyData = JSON.parse(localStorage.getItem('vocabulary'));
    console.log(vocabularyData);
    [1, 2].reduce((preVal, CurVal) => preVal + CurVal);
    const result = vocabularyData.reduce((preVal, curVal) => {
      if (curVal.name === course) {
        curVal.data = [...curVal.data, data];
        return [...preVal, curVal];
      } else {
        return [...preVal, curVal];
      }
    }, []);
    localStorage.setItem('vocabulary', JSON.stringify(result));
  } else {
    localStorage.setItem(
      'vocabulary',
      JSON.stringify([{ name: course, data }])
    );
  }
};

export const addCourse = name => {
  if (!name) return;
  const newCourse = { name, data: [] };
  if (localStorage.getItem('vocabulary')) {
    const vocabulary = JSON.parse(localStorage.getItem('vocabulary'));
    localStorage.setItem(
      'vocabulary',
      JSON.stringify([...vocabulary, newCourse])
    );
  } else {
    localStorage.setItem('vocabulary', JSON.stringify([newCourse]));
  }
};

export const updateVocabulary = (nameCourse, nameVocabulary, dataUpdate) => {
  if (localStorage.getItem('vocabulary')) {
    const vocabulary = JSON.parse(localStorage.getItem('vocabulary'));

    vocabulary.reduce((perVal, curVal) => {
      if (curVal.name === nameCourse) {
        let indexDataUpdate = curVal.data.findIndex(
          item => item.vocabulary === nameVocabulary
        );
        curVal.data[indexDataUpdate] = {
          ...curVal.data[indexDataUpdate],
          ...dataUpdate,
        };

        return [...perVal, curVal];
      } else {
        return [...perVal, curVal];
      }
    }, []);
    localStorage.setItem('vocabulary', JSON.stringify(vocabulary));
  }
};

export const deleteCourse = name => {
  if (localStorage.getItem('vocabulary')) {
    const vocabulary = JSON.parse(localStorage.getItem('vocabulary'));
    const result = vocabulary.filter(item => item.name !== name);
    localStorage.setItem('vocabulary', JSON.stringify(result));
  }
};
export const deleteVocabulary = (course, vocabularyName) => {
  if (localStorage.getItem('vocabulary')) {
    const vocabulary = JSON.parse(localStorage.getItem('vocabulary'));

    // const [result] = vocabulary.filter(item => item.name === course);
    const indexVocal = vocabulary.findIndex(item => item.name === course);

    const result = vocabulary[indexVocal].data.filter(
      item => item.vocabulary !== vocabularyName
    );

    vocabulary[indexVocal].data = result;
    localStorage.setItem('vocabulary', JSON.stringify(vocabulary));
    // console.log(result);
  }
};

export function speak(message) {
  var msg = new SpeechSynthesisUtterance(message);
  var voices = window.speechSynthesis.getVoices();
  msg.voice = voices[0];
  window.speechSynthesis.speak(msg);
}

//Play audio
// const audioVocabulary = useRef([]);

//check object containing id?
// const existObj = (objNew, arrayObjOld) => {
//   let result = false;
//   arrayObjOld.forEach(objOld => {
//     if (objOld.id === objNew.id) return (result = true);
//   });
//   return result;
// };
// const addRef = element => {
//   if (element?.el && !existObj(element, audioVocabulary.current)) {
//     audioVocabulary.current.push(element);
//   }
// };

// const handleClickAudio = id => {
//   const audio = audioVocabulary.current?.filter(item => item.id === id);

//   audio[0].el.play();
// };
