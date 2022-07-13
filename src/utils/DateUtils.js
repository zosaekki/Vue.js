export default { // 객체를 외부에서 사용할 수 있도록 해줌! public이랑 같은? 역할
   getTimestamp: function(date) { // date parameter = Date 객체
        date.setHours(date.getHours() + 9);
        return date.toISOString().replace('T', ' ').substring(0, 19);
     }
}