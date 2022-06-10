import React, { Component } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { Pannellum, PannellumVideo } from "pannellum-react";
import myImage from "./images/car.jpg";
import Home from './Home';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';


class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowWheelCad: false,
            dropDownG: false,
            visitedSpot: [],
        }
    }
    componentWillMount() {
        console.log('this.props.isLoggedIn = ', this.props.isLoggedIn);
        if (!this.props.isLoggedIn)
            this.props.history.push('/login')
    }
    componentDidMount() {
        // Update the document title using the browser API
        $("#small-screenS").click(function () {
            // Change src attribute of image
            $("#small-car-videoS iframe").attr("src",
                "https://www.youtube.com/embed/XKfgdkcIUxw?title=0&portrait=0&byline=0&loop=0&transparent=1&autoplay=1"
            );
        });
        $("#small-screenG").click(function () {
            // Change src attribute of image
            $("#small-car-videoG iframe").attr("src",
                "https://www.youtube.com/embed/SQIbeAk-bFA?title=0&portrait=0&byline=0&loop=1&transparent=1&autoplay=1"
            );
        });
        $("#small-screenR").click(function () {
            // Change src attribute of image
            $("#small-car-videoR iframe").attr("src",
                "https://www.youtube.com/embed/zJFwOC_Bv4Y?title=0&portrait=0&byline=0&loop=1&transparent=1&autoplay=1"
            );
        });
        $(".close-btn2").click(function () {
            $(".iframe-box").attr("src",
                ""
            );
        });
        $('.pop-up-box').on('click', function (e) {
            e.preventDefault();

            $("#inBox").removeClass('showIn');
        });
        $('.center-popup').on('click', function (e) {
            e.preventDefault();
            $(".main-option").removeClass('show-box');
            $(".main-option").addClass('hide-box');
        });
        $('.four-boxs').on('click', function (e) {
            e.preventDefault();
            $('.option-tools').css('display',
                'none');
        });
        $('#dropdownStool, #dropdownRtool, #dropdownGtool').click(function () {
            $("#dropS, #dropR, #dropG").css("display", "none");
        });
        $('#dropdownS, #dropdownR, #dropdownG').click(function () {
            console.log('here');
            $("#dropStool, #dropRtool, #dropGtool").css("display", "none");
        });
        $('#inter').click(function () {
            $(".interior-box").removeClass("showIn");
        });
        $('.close-main-option').click(function () {
            $(".main-option").addClass("hide-box");
            $(".main-option").removeClass("show-box");
        });
        // close buttons right handside 

        $('#sTpopUp, #rTpopUp, #gTpopUp').click(function () {
            $("#sTbox, #rTbox, #gTbox").addClass("hide-box");
            $("#sTbox, #rTbox, #gTbox").removeClass("show-box");
        });
        $('#sVpopUp, #rVpopUp, #gVpopUp').click(function () {
            $("#sVbox, #rVbox, #gVbox").addClass("hide-box");
            $("#sVbox, #rVbox, #gVbox").removeClass("show-box");
        });
        $('#sRpopUp, #rRpopUp, #gRpopUp').click(function () {
            $("#sRbox, #rRbox, #gRbox").addClass("hide-box");
            $("#sRbox, #rRbox, #gRbox").removeClass("show-box");
        });
        $('#sGpopUp, #rGpopUp, #gGpopUp').click(function () {
            $("#sGbox, #rGbox, #gGbox").addClass("hide-box");
            $("#sGbox, #rGbox, #gGbox").removeClass("show-box");
        });
        $('#sLinkAll').click(function () {
            $("#tool-boxS").css("display", "block");
            $("#sTbox, #sVbox, #sRbox, #sGbox").addClass("show-box");
            $("#sTbox, #sVbox, #sRbox, #sGbox").removeClass("hide-box");
        });
        $('#gLinkAll').click(function () {
            $("#tool-boxG").css("display", "block");
            $("#gTbox, #gVbox, #gRbox, #gGbox").addClass("show-box");
            $("#gTbox, #gVbox, #gRbox, #gGbox").removeClass("hide-box");
        });
        $('#rLinkAll').click(function () {
            $("#tool-boxR").css("display", "block");
            $("#rTbox, #rVbox, #rRbox, #rGbox").addClass("show-box");
            $("#rTbox, #rVbox, #rRbox, #rGbox").removeClass("hide-box");
        });

        //close all boxs

        $('#sClose').click(function () {
            $("#tool-boxS").css("display", "none");
            $(".option-tools ul li").addClass("hide-box");
            $(".option-tools ul li").removeClass("show-box");
        });
        $('#rClose').click(function () {
            $("#tool-boxR").css("display", "none");
            $(".option-tools ul li").addClass("hide-box");
            $(".option-tools ul li").removeClass("show-box");
        });
        $('#gClose').click(function () {
            $("#tool-boxG").css("display", "none");
            $(".option-tools ul li").addClass("hide-box");
            $(".option-tools ul li").removeClass("show-box");
        });

        /// show all to close all
        $('#sLinkAll, #rLinkAll, #gLinkAll').click(function () {
            $(".showAll").css("display", "none");
            $(".closeAll").css("display", "block");
        });
        $('#sClose, #rClose, #gClose').click(function () {
            $(".showAll").css("display", "block");
            $(".closeAll").css("display", "none");
        });


        $('#sLink1, #rLink1, #gLink1').click(function () {
            $("#tool-boxS, #tool-boxR, #tool-boxG").css("display", "block");
            $("#sTbox, #rTbox, #gTbox").addClass("show-box");
            $("#sTbox, #rTbox, #gTbox").removeClass("hide-box");
            // $("#sVbox, #rVbox, #gVbox, #sRbox, #rRbox, #gRbox, #sGbox, #rGbox, #gGbox").addClass(
            //     "hide-box");
            // $("#sVbox, #rVbox, #gVbox, #sRbox, #rRbox, #gRbox, #sGbox, #rGbox, #gGbox").removeClass(
            //     "show-box");
        });
        $('#sLink2, #rLink2, #gLink2').click(function () {
            $("#tool-boxS, #tool-boxR, #tool-boxG").css("display", "block");
            $("#sVbox, #rVbox, #gVbox").addClass("show-box");
            $("#sVbox, #rVbox, #gVbox").removeClass("hide-box");
            // $("#sRbox, #rRbox, #gRbox, #sGbox, #rGbox, #gGbox, #sTbox, #rTbox, #gTbox").addClass(
            //     "hide-box");
            // $("#sRbox, #rRbox, #gRbox, #sGbox, #rGbox, #gGbox, #sTbox, #rTbox, #gTbox").removeClass(
            //     "show-box");
        });
        $('#sLink3, #rLink3, #gLink3').click(function () {
            $("#tool-boxS, #tool-boxR, #tool-boxG").css("display", "block");
            $("#sRbox, #rRbox, #gRbox").addClass("show-box");
            $("#sRbox, #rRbox, #gRbox").removeClass("hide-box");
            // $("#sGbox, #rGbox, #gGbox, #sTbox, #rTbox, #gTbox, #sVbox, #rVbox, #gVbox").addClass(
            //     "hide-box");
            // $("#sGbox, #rGbox, #gGbox, #sTbox, #rTbox, #gTbox, #sVbox, #rVbox, #gVbox").removeClass(
            //     "show-box");
        });
        $('#sLink4, #rLink4, #gLink4').click(function () {
            $("#tool-boxS, #tool-boxR, #tool-boxG").css("display", "block");
            $("#sGbox, #rGbox, #gGbox").addClass("show-box");
            $("#sGbox, #rGbox, #gGbox").removeClass("hide-box");
            // $("#sTbox, #rTbox, #gTbox, #sVbox, #rVbox, #gVbox, #sRbox, #rRbox, #gRbox").addClass(
            //     "hide-box");
            // $("#sTbox, #rTbox, #gTbox, #sVbox, #rVbox, #gVbox, #sRbox, #rRbox, #gRbox").removeClass(
            //     "show-box");
        });
        $('#dropdownStool').click(function () {
            $("#dropStool").toggle();
            $("#tool-boxS, #tool-boxR, #tool-boxG").css("display", "none");
        });
        $('#dropdownRtool').click(function () {
            $("#dropRtool").toggle();
            $("#tool-boxS, #tool-boxR, #tool-boxG").css("display", "none");
        });
        $('#dropdownGtool').click(function () {
            $("#dropGtool").toggle();
            $("#tool-boxS, #tool-boxR, #tool-boxG").css("display", "none");
        });
        $('.select-drop-down a').click(function () {

            $("#dropS, #dropG, #dropR").css("display", "none");

        });

        $('#dropdownG').click(function () {
            console.log('aa')
            $("#dropG").toggle();
            // $("#tool-boxG").css("display", "none");
        });
        $('#dropdownR').click(function () {
            $("#dropR").toggle();
            // $("#tool-boxR").css("display", "none");
        });
        $("#toolS").click(function () {
            $("#tool-boxS").toggle();
            $('#sVbox, #sRbox, #sTbox, #sGbox').addClass("show-box");
            $('#sVbox, #sRbox, #sTbox, #sGbox').removeClass("hide-box");
        });
        $("#toolR").click(function () {
            $("#tool-boxR").toggle();
            $('#rVbox, #rRbox, #rTbox, #rGbox').addClass("show-box");
            $('#rVbox, #rRbox, #rTbox, #rGbox').removeClass("hide-box");
        });
        $("#toolG").click(function () {
            $("#tool-boxG").toggle();
            $('#gVbox, #gRbox, #gTbox, #gGbox').addClass("show-box");
            $('#gVbox, #gRbox, #gTbox, #gGbox').removeClass("hide-box");
        });
        $('#tryBtn, #tryBtnTop').click(function () {
            $('#inBox').toggleClass("showIn");
            // $('.hotspot-nav').css('pointer-events', 'auto');
            $('.on-load').hide();
        });
        $('#topListIcon, #list-Bs, #list-Bg, #list-Br').click(function () {
            $('#inBox').toggleClass("showIn");
        });
        $('.top-nav a').click(function () {
            $('.top-nav a').removeClass("active");
            $(this).addClass("active");
        });
        $('.list-numbers a').click(function () {
            $('.list-numbers a').removeClass("active");
            $(this).addClass("active");
        });
        $('.option-nav a').click(function () {
            $('.option-nav a').removeClass("active");
            $(this).addClass("active");
        });
        $('.white-arrow a').click(function () {
            $('.white-arrow a').removeClass("active");
            $(this).addClass("active");
        });
        $('#s-nav').click(function () {
            // $('#options-list-box').addClass("show-options-listbox");
            $('#s-box').addClass("show-box");
            $('#s-box').removeClass("hide-box");
            $('#g-box').addClass("hide-box");
            $('#r-box').addClass("hide-box");
            $('#g-box').removeClass("show-box");
            $('#r-box').removeClass("show-box");
            $('.firstr').addClass("active");
            $('.firstr').removeClass("purple");
            $('.secondr').removeClass("active");
            $('.thirdr').removeClass("active");
            $('#inspection1').val('1');
            var second = $('#inspection2').val();
            var third = $('#inspection3').val();
            if (third == 1) {
                $('.thirdr').addClass("purple");
            }
            if (second == 1) {
                $('.secondr').addClass("purple");
            }

            $('.select-drop-down').css("display", "none");
        });
        $('#r-nav').click(function () {
            // $('#options-list-box').addClass("show-options-listbox");
            $('#r-box').addClass("show-box");
            $('#r-box').removeClass("hide-box");
            $('#s-box').addClass("hide-box");
            $('#g-box').addClass("hide-box");
            $('#s-box').removeClass("show-box");
            $('#g-box').removeClass("show-box");
            $('.firstr').removeClass("active");
            $('.secondr').removeClass("purple");
            $('.secondr').addClass("active");
            $('.thirdr').removeClass("active");
            $('#inspection2').val('1');
            var first = $('#inspection1').val();
            var third = $('#inspection3').val();
            if (third == 1) {
                $('.thirdr').addClass("purple");
            }
            if (first == 1) {
                $('.firstr').addClass("purple");
            }
            $('.select-drop-down').css("display", "none");
        });
        $('#g-nav').click(function () {
            // $('#options-list-box').addClass("show-options-listbox");
            $('#g-box').addClass("show-box");
            $('#g-box').removeClass("hide-box");
            $('#r-box').addClass("hide-box");
            $('#s-box').addClass("hide-box");
            $('#r-box').removeClass("show-box");
            $('#s-box').removeClass("show-box");
            $('.firstr').removeClass("active");
            $('.secondr').removeClass("active");
            $('.thirdr').removeClass("purple");
            $('.thirdr').addClass("active");
            $('#inspection3').val('1');
            var first = $('#inspection1').val();
            var second = $('#inspection2').val();
            if (first == 1) {
                $('.secondr').addClass("purple");
            }
            if (second == 1) {
                $('.firstr').addClass("purple");
            }
            $('.select-drop-down').css("display", "none");
        });
        //video 1st pop up
        $('#video-linkS').click(function () {
            $('#popupS').toggleClass("show-popup");
        });
        $('#video-linkG').click(function () {
            $('#popupG').toggleClass("show-popup");
        });
        $('#video-linkR').click(function () {
            $('#popupR').toggleClass("show-popup");
        });
        //small Screen
        $('#small-screenS').click(function () {
            $('#popupS').removeClass("show-popup");
            $('#small-car-videoS').addClass('show-small-video')
        });
        $('#small-screenG').click(function () {
            $('#popupG').removeClass("show-popup");
            $('#small-car-videoG').addClass('show-small-video')
        });
        $('#small-screenR').click(function () {
            $('#popupR').removeClass("show-popup");
            $('#small-car-videoR').addClass('show-small-video')
        });
        // open New Screen
        $('#newTapS').click(function () {
            $('#popupS').removeClass("show-popup");
        });
        $('#newTapG').click(function () {
            $('#popupG').removeClass("show-popup");
        });
        $('#newTapR').click(function () {
            $('#popupR').removeClass("show-popup");
        });
        //close pop up
        $('.close-btn').click(function () {
            $('#popupS').removeClass("show-popup");
        });
        $('.close-btn').click(function () {
            $('#popupG').removeClass("show-popup");
        });
        $('.close-btn').click(function () {
            $('#popupR').removeClass("show-popup");
        });
        //close small screen pop up
        $('.close-btn2').click(function () {
            $('#small-car-videoS').removeClass('show-small-video')
        });
        $('.close-btn2').click(function () {
            $('#small-car-videoG').removeClass('show-small-video')
        });
        $('.close-btn2').click(function () {
            $('#small-car-videoR').removeClass('show-small-video')
        });
        $("#s-nav").click(function () {
            $(this).addClass("active");
            $('#r-nav').removeClass("active");
            $('#g-nav').removeClass("active");
        });
        $("#r-nav").click(function () {
            $(this).addClass("active");
            $('#s-nav').removeClass("active");
            $('#g-nav').removeClass("active");
        });
        $("#g-nav").click(function () {
            $(this).addClass("active");
            $('#s-nav').removeClass("active");
            $('#r-nav').removeClass("active");
        });
        $("#next1").click(function () {
            $('#r-box').addClass("show-box");
            $('#r-box').removeClass("hide-box");
            $('#r-nav').addClass("active");
            $('#s-nav, #g-nav').removeClass("active");
            $('#s-box, #g-box').addClass("hide-box");
            $('.select-drop-down').css("display", "none");


        });
        $("#next2").click(function () {
            $('#g-box').addClass("show-box");
            $('#g-box').removeClass("hide-box");
            $('#g-nav').addClass("active");
            $('#r-nav, #s-nav').removeClass("active");
            $('#s-box, #r-box').addClass("hide-box");
            $('.select-drop-down').css("display", "none");
        });
        $("#prev2").click(function () {
            $('#r-box').addClass("show-box");
            $('#r-box').removeClass("hide-box");
            $('#r-nav').addClass("active");
            $('#g-nav, #s-nav').removeClass("active");
            $('#s-box, #g-box').addClass("hide-box");
            $('.select-drop-down').css("display", "none");
        });
        $("#prev1").click(function () {
            $('#s-box').addClass("show-box");
            $('#s-box').removeClass("hide-box");
            $('#s-nav').addClass("active");
            $('#g-nav, #r-nav').removeClass("active");
            $('#r-box, #g-box').addClass("hide-box");
            $('.select-drop-down').css("display", "none");
        });
        $("#s-btn a").click(function () {
            $(this).addClass("active");
            $('#s-box').addClass("show-box");
            $('#s-box').removeClass("hide-box");
            $('#g-box').removeClass("show-box");
            $('#r-box').removeClass("show-box");
            $('.firstr').addClass("active");
            $('.firstr').removeClass("purple");
            $('.secondr').removeClass("active");
            $('.thirdr').removeClass("active");
            $('#inspection1').val('1');
            var second = $('#inspection2').val();
            var third = $('#inspection3').val();
            if (third == 1) {
                $('.thirdr').addClass("purple");
            }
            if (second == 1) {
                $('.secondr').addClass("purple");
            }
        });
        $("#r-btn a").click(function () {
            $(this).addClass("active");
            $('#r-box').addClass("show-box");
            $('#r-box').removeClass("hide-box");
            $('#s-box').removeClass("show-box");
            $('#g-box').removeClass("show-box");
            $('.firstr').removeClass("active");
            $('.secondr').removeClass("purple");
            $('.secondr').addClass("active");
            $('.thirdr').removeClass("active");
            $('#inspection2').val('1');
            var first = $('#inspection1').val();
            var third = $('#inspection3').val();
            if (third == 1) {
                $('.thirdr').addClass("purple");
            }
            if (first == 1) {
                $('.firstr').addClass("purple");
            }
        });
        $("#g-btn a").click(function () {
            $(this).addClass("active");
            $('#g-box').addClass("show-box");
            $('#g-box').removeClass("hide-box");
            $('#r-box').removeClass("show-box");
            $('#s-box').removeClass("show-box");
            $('.firstr').removeClass("active");
            $('.secondr').removeClass("active");
            $('.thirdr').removeClass("purple");
            $('.thirdr').addClass("active");
            $('#inspection3').val('1');
            var first = $('#inspection1').val();
            var second = $('#inspection2').val();
            if (first == 1) {
                $('.secondr').addClass("purple");
            }
            if (second == 1) {
                $('.firstr').addClass("purple");
            }

        });
    }
    showWheelCad = () => {
        console.log('state = ', this.state.isShowWheelCad)
        this.setState({
            isShowWheelCad: true,
        })
    }
    zoomincrease(id) {
        if (id == 1) {
            $('.zoomin').attr("onClick", "() => this.zoomincrease('1')");
            $("html").addClass('zoombig1');
        }
        if (id == 2) {
            $("html").removeClass('zoombig1');
            $("html").addClass('zoombig2');
        }
    }

    unzoom(id) {
        if (id == 1) {
            $('.unzoomin').attr("onClick", "() => this.unzoom('2')");
            $("html").addClass('zoombig1');
            $("html").removeClass('zoombig2');
        }
        if (id == 2) {
            $("html").removeClass('zoombig1');
        }
    }

    render() {
        return (
            <div>
                <Modal
                    show={this.state.isShowWheelCad}
                    onHide={() => this.setState({ isShowWheelCad: false })}
                    // style={{position: 'absolute', top: '10%', left: '5%', width: '80%', height: '80%', backgroundColor: 'transparent', zIndex: '999999'}}
                    dialogClassName="modal-90w"
                    fullscreen={true}
                    size="lg"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Graphic
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div style={{ width: '100%', height: '100%', backgroundColor: 'transparent', zIndex: '999999' }} ><Home /></div>
                    </Modal.Body>
                </Modal>
                <ul className="top-nav">
                    <li>
                        <a href="#">
                            <div className="image-top">
                                <img src="https://www.linkpicture.com/q/select.png" alt="img-icon" />
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" id="topListIcon">
                            <div className="image-top">
                                <img src="https://www.linkpicture.com/q/list_2.png" alt="img-icon" />
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com/" target="_blank">
                            <div className="image-top">
                                <img src="https://www.linkpicture.com/q/map_7.png" alt="img-icon" />
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com/" target="_blank">
                            <div className="image-top">
                                <img src="https://www.linkpicture.com/q/resources.png" alt="img-icon" />
                            </div>
                        </a>
                    </li>
                    <li id="zBox">
                        <a href="#" className="zoomin" onClick={() => this.zoomincrease('1')}>
                            <div className="image-top">
                                <img src="https://www.linkpicture.com/q/ZOOMIN.png" alt="img-icon" />
                            </div>
                        </a>
                    </li>
                    <li id="zIn">
                        <a href="#" className="unzoomin" onClick={() => this.unzoom('1')}>
                            <div className="image-top">
                                <img src="https://www.linkpicture.com/q/ZOOMOUT.png" alt="img-icon" />
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="https://support.google.com/" target="_blank">
                            <div className="image-top">
                                <img src="https://www.linkpicture.com/q/help_5.png" alt="img-icon" />
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className="image-top">
                                <img src="https://www.linkpicture.com/q/icon-img2.png" alt="img-icon" />
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" id="tryBtnTop">
                            <div className="image-top">
                                <img src="https://www.linkpicture.com/q/icon-img3.png" alt="img-icon" />
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" id="tryBtn">
                            <div className="image-top">
                                <img src="https://www.linkpicture.com/q/icon-img1.png" alt="img-icon" />
                            </div>
                        </a>
                    </li>
                    <li>
                        <Link to="/">
                            <i className="fal fa-sign-out"></i> Logout
                        </Link>
                    </li>
                </ul>
                <ul className="hotspot-nav">
                    {/* <li id="s-btn" className="steering-wheel-btn">
                        <a href="#" className="firstr"></a>
                    </li> */}
                    {/* <li id="r-btn" className="radio-btn">
                        <a href="#" className="secondr"></a>
                    </li> */}
                    {/* <li id="g-btn" className="gear-shirt-btn">
                        <a href="#" className="thirdr"></a>
                    </li> */}
                </ul>
                <div className="interior-box" id="inBox">
                    <div className="pop-up-box">
                    </div>
                    <div className="box-blue">
                        <div className="rel small-close-btn" id="inter"><a href="#"><i className="fas fa-times"></i> </a>
                        </div>
                        <h3 className="bg-green">Interior Inspection</h3>
                        <ul id="interior-links">
                            <li><a href="#" id="s-nav">1. Steering Wheel</a></li>
                            <li><a href="#" id="r-nav">2. Radio</a></li>
                            <li><a href="#" id="g-nav">3. Gear Shift</a></li>
                        </ul>
                    </div>
                </div>
                <div className="main-option" id="s-box">
                    <div className="blue-center-box">


                        <div className="rel small-close-btn close-main-option"><a href="#"><i className="fas fa-times"></i>
                        </a>
                        </div>
                        <ul className="option-nav s">
                            <li>
                                <a href="#" id="list-Bs">
                                    <div className="rightbox-icon">
                                        <img src="https://www.linkpicture.com/q/list_2.png" alt="" />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" id="dropdownStool">
                                    <div className="rightbox-icon">
                                        <img src="https://www.linkpicture.com/q/tools.png" alt="" />
                                    </div>
                                </a>
                                <ul className="select-drop-down" id="dropStool" style={{ display: 'none' }}>
                                    <li>
                                        <a href="#" id="">Show me</a>
                                    </li>
                                    <li>
                                        <a href="#" id="">Let me try</a>
                                    </li>
                                    <li>
                                        <a href="#" id="">Verify</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" id="dropdownS" onClick={() => {
                                    this.setState({
                                        dropDownS: !this.state.dropDownS
                                    })
                                }}>
                                    <div className="rightbox-icon">
                                        <img src="https://www.linkpicture.com/q/resources.png" alt="" />
                                    </div>
                                </a>
                                <ul className="select-drop-down" id="dropS" style={{ display: this.state.dropDownS ? 'block' : 'none' }}>
                                    <li className="showAll">
                                        <a href="#" id="sLinkAll">Show all</a>
                                    </li>
                                    <li className="closeAll" style={{ display: 'none' }}>
                                        <a href="#" id="sClose">Close all</a>
                                    </li>
                                    <li>
                                        <a href="#" id="sLink1">tools</a>
                                    </li>
                                    <li>
                                        <a href="#" id="sLink2">videos</a>
                                    </li>
                                    <li>
                                        <a href="#" id="sLink3">resources</a>
                                    </li>
                                    <li>
                                        <a href="#" id="sLink4">graphics</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" id="">
                                    <div className="rightbox-icon">
                                        <img src="https://www.linkpicture.com/q/back_10.png" alt="" />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="rightbox-icon">
                                        <img src="https://www.linkpicture.com/q/current.png" alt="" />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" id="next1">
                                    <div className="rightbox-icon">
                                        <img src="https://www.linkpicture.com/q/next_9.png" alt="" />
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <div className="options-list">
                            <h3 className="bg-green">steering wheel</h3>
                            <ul className="list-numbers">
                                <li><a href="#">Inspect steering wheel for cracks in the covering and test controls.</a></li>
                                <li><a href="#">Repair Steering Wheel.</a></li>
                                <li><a href="#">Test cruise control.</a></li>
                            </ul>
                        </div>
                        <div className="option-tools" id="tool-boxS" style={{ display: 'none' }}>
                            <ul>
                                <li id="sTbox" className="hide-box">
                                    <div className="rel small-close-btn" id="sTpopUp"><a href="#"><i
                                        className="fas fa-times"></i>
                                    </a>
                                    </div>
                                    <div className="options-list ">
                                        <h3 className="bg-tools">
                                            <span className="option-icon">
                                                <img src="https://www.linkpicture.com/q/tools.png" alt="image" />
                                            </span>
                                            tools
                                        </h3>
                                        <ul className="list-numbers">
                                            <li><a href="#">Strong Flashlight</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li id="sVbox" className="hide-box">
                                    <div className="rel small-close-btn" id="sVpopUp"><a href="#"><i
                                        className="fas fa-times"></i>
                                    </a>
                                    </div>
                                    <div className="options-list">
                                        <h3 className="bg-video">
                                            <span className="option-icon">
                                                <img src="https://www.linkpicture.com/q/video.png" alt="image" />
                                            </span>
                                            videos
                                        </h3>
                                        <ul className="list-numbers">
                                            <li><a href="#" id="video-linkS">Repair Steering wheel cracks</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li id="sRbox" className="hide-box">
                                    <div className="rel small-close-btn" id="sRpopUp"><a href="#"><i
                                        className="fas fa-times"></i>
                                    </a>
                                    </div>
                                    <div className="options-list">
                                        <h3 className="bg-maroon">
                                            <span className="option-icon">
                                                <img src="https://www.linkpicture.com/q/resources.png" alt="image" />
                                            </span>
                                            resources
                                        </h3>
                                        <ul className="list-numbers">
                                            <li><a href="#">Owners Manual</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li id="sGbox" className="hide-box">
                                    <div className="rel small-close-btn" id="sGpopUp"><a href="#"><i
                                        className="fas fa-times"></i>
                                    </a>
                                    </div>
                                    <div className="options-list">
                                        <h3 className="bg-maroon">
                                            <span className="option-icon">
                                                <img src="https://www.linkpicture.com/q/graphic.png" alt="image" />
                                            </span>
                                            graphics
                                        </h3>
                                        <ul className="list-numbers">
                                            <li><a onClick={this.showWheelCad}>Steering Wheel CAD</a></li>
                                            <li><a href="#">Steering Wheel Animation</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="main-option" id="r-box">
                    <div className="blue-center-box">
                        <div className="rel small-close-btn close-main-option"><a href="#"><i className="fas fa-times"></i>
                        </a>
                        </div>
                        <ul className="option-nav r">
                            <li>
                                <a href="#" id="list-Br">
                                    <div className="rightbox-icon">
                                        <img src="https://www.linkpicture.com/q/list_2.png" alt="" />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" id="dropdownRtool">
                                    <div className="rightbox-icon">
                                        <img src="https://www.linkpicture.com/q/tools.png" alt="" />
                                    </div>
                                </a>
                                <ul className="select-drop-down" id="dropRtool" style={{ display: 'none' }}>
                                    <li>
                                        <a href="#" id="">Show Me</a>
                                    </li>
                                    <li>
                                        <a href="#" id="">left me try</a>
                                    </li>
                                    <li>
                                        <a href="#" id="">Verify</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" id="dropdownR">
                                    <div className="rightbox-icon">
                                        <img src="https://www.linkpicture.com/q/resources.png" alt="" />
                                    </div>
                                </a>
                                <ul className="select-drop-down" id="dropR" style={{ display: 'none' }}>
                                    <li className="showAll">
                                        <a href="#" id="rLinkAll">Show all</a>
                                    </li>
                                    <li className="closeAll" style={{ display: 'none' }}>
                                        <a href="#" id="rClose">Close all</a>
                                    </li>
                                    <li>
                                        <a href="#" id="rLink1">tools</a>
                                    </li>
                                    <li>
                                        <a href="#" id="rLink2">videos</a>
                                    </li>
                                    <li>
                                        <a href="#" id="rLink3">resources</a>
                                    </li>
                                    <li>
                                        <a href="#" id="rLink4">graphics</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" id="prev1">
                                    <div className="rightbox-icon">
                                        <img src="https://www.linkpicture.com/q/back_10.png" alt="" />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="rightbox-icon">
                                        <img src="https://www.linkpicture.com/q/current.png" alt="" />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" id="next2">
                                    <div className="rightbox-icon">
                                        <img src="https://www.linkpicture.com/q/next_9.png" alt="" />
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <div className="options-list">
                            <h3 className="bg-green">Radio</h3>
                            <ul className="list-numbers">
                                <li><a href="#">Radio Link</a></li>
                                <li><a href="#">Radio Link</a></li>
                                <li><a href="#">Radio Link</a></li>
                                <li><a href="#">Radio Link</a></li>
                            </ul>
                        </div>
                        <div className="option-tools" id="tool-boxR" style={{ display: 'none' }}>
                            <ul>
                                <li id="rTbox" className="hide-box">
                                    <div className="rel small-close-btn" id="rTpopUp"><a href="#"><i
                                        className="fas fa-times"></i>
                                    </a>
                                    </div>
                                    <div className="options-list ">
                                        <h3 className="bg-tools">
                                            <span className="option-icon">
                                                <img src="https://www.linkpicture.com/q/tools.png" alt="image" />
                                            </span>
                                            tools
                                        </h3>
                                        <ul className="list-numbers">
                                            <li><a href="#">Strong Flashlight</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li id="rVbox" className="hide-box">
                                    <div className="rel small-close-btn" id="rVpopUp"><a href="#"><i
                                        className="fas fa-times"></i>
                                    </a>
                                    </div>
                                    <div className="options-list">
                                        <h3 className="bg-video">
                                            <span className="option-icon">
                                                <img src="https://www.linkpicture.com/q/video.png" alt="image" />
                                            </span>
                                            videos
                                        </h3>
                                        <ul className="list-numbers">
                                            <li><a href="#" id="video-linkR">Repair Radio</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li id="rRbox" className="hide-box">
                                    <div className="rel small-close-btn" id="rRpopUp"><a href="#"><i
                                        className="fas fa-times"></i>
                                    </a>
                                    </div>
                                    <div className="options-list">
                                        <h3 className="bg-maroon">
                                            <span className="option-icon">
                                                <img src="https://www.linkpicture.com/q/resources.png" alt="image" />
                                            </span>
                                            resources
                                        </h3>
                                        <ul className="list-numbers">
                                            <li><a href="#">Owners Manual</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li id="rGbox" className="hide-box">
                                    <div className="rel small-close-btn" id="rGpopUp"><a href="#"><i
                                        className="fas fa-times"></i>
                                    </a>
                                    </div>
                                    <div className="options-list">
                                        <h3 className="bg-maroon">
                                            <span className="option-icon">
                                                <img src="https://www.linkpicture.com/q/graphic.png" alt="image" />
                                            </span>
                                            graphics
                                        </h3>
                                        <ul className="list-numbers">
                                            <li><a href="#">Radio CAD</a></li>
                                            <li><a href="#">Radio Animation</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="main-option" id="g-box">
                    <div className="blue-center-box">
                        <div className="rel small-close-btn close-main-option"><a href="#"><i className="fas fa-times"></i>
                        </a>
                        </div>
                        <ul className="option-nav g">
                            <li>
                                <a href="#" id="list-Bg">
                                    <div className="rightbox-icon">
                                        <img src="https://www.linkpicture.com/q/list_2.png" alt="" />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" id="dropdownGtool">
                                    <div className="rightbox-icon">
                                        <img src="https://www.linkpicture.com/q/tools.png" alt="" />
                                    </div>
                                </a>
                                <ul className="select-drop-down" id="dropGtool" style={{ display: 'none' }}>
                                    <li>
                                        <a href="#" id="">Show Me</a>
                                    </li>
                                    <li>
                                        <a href="#" id="">Let me try</a>
                                    </li>
                                    <li>
                                        <a href="#" id="">Verify</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" id="dropdownG" onClick={() => {
                                    console.log('asdfasdfasdf')
                                    this.setState({
                                        dropDownG: !this.state.dropDownG
                                    })
                                }}>
                                    <div className="rightbox-icon">
                                        <img src="https://www.linkpicture.com/q/resources.png" alt="" />
                                    </div>
                                </a>
                                <ul className="select-drop-down" id="dropG" style={{ display: this.state.dropDownG ? 'block' : 'none' }}>
                                    <li className="showAll">
                                        <a href="#" id="gLinkAll">Show all</a>
                                    </li>
                                    <li className="closeAll" style={{ display: 'none' }}>
                                        <a href="#" id="gClose">Close all</a>
                                    </li>
                                    <li>
                                        <a href="#" id="gLink1">tools</a>
                                    </li>
                                    <li>
                                        <a href="#" id="gLink2">videos</a>
                                    </li>
                                    <li>
                                        <a href="#" id="gLink3">resources</a>
                                    </li>
                                    <li>
                                        <a href="#" id="gLink4">graphics</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" id="prev2">
                                    <div className="rightbox-icon">
                                        <img src="https://www.linkpicture.com/q/back_10.png" alt="" />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="rightbox-icon">
                                        <img src="https://www.linkpicture.com/q/current.png" alt="" />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="rightbox-icon">
                                        <img src="https://www.linkpicture.com/q/next_9.png" alt="" />
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <div className="options-list">
                            <h3 className="bg-green">Gear Shift</h3>
                            <ul className="list-numbers">
                                <li><a href="#">Gear Shift Link</a></li>
                                <li><a href="#">Gear Shift Link</a></li>
                                <li><a href="#">Gear Shift Link</a></li>
                                <li><a href="#">Gear Shift Link</a></li>
                            </ul>
                        </div>
                        <div className="option-tools" id="tool-boxG" style={{ display: 'none' }}>
                            <ul>
                                <li id="gTbox" className="hide-box">
                                    <div className="rel small-close-btn" id="gTpopUp"><a href="#"><i
                                        className="fas fa-times"></i>
                                    </a>
                                    </div>
                                    <div className="options-list ">
                                        <h3 className="bg-tools">
                                            <span className="option-icon">
                                                <img src="https://www.linkpicture.com/q/tools.png" alt="image" />
                                            </span>
                                            tools
                                        </h3>
                                        <ul className="list-numbers">
                                            <li><a href="#">Strong Flashlight</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li id="gVbox" className="hide-box">
                                    <div className="rel small-close-btn" id="gVpopUp"><a href="#"><i
                                        className="fas fa-times"></i>
                                    </a>
                                    </div>
                                    <div className="options-list">
                                        <h3 className="bg-video">
                                            <span className="option-icon">
                                                <img src="https://www.linkpicture.com/q/video.png" alt="image" />
                                            </span>
                                            videos
                                        </h3>
                                        <ul className="list-numbers">
                                            <li><a href="#" id="video-linkG">Repair Gear Shifter cracks</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li id="gRbox" className="hide-box">
                                    <div className="rel small-close-btn" id="gRpopUp"><a href="#"><i
                                        className="fas fa-times"></i>
                                    </a>
                                    </div>
                                    <div className="options-list">
                                        <h3 className="bg-maroon">
                                            <span className="option-icon">
                                                <img src="https://www.linkpicture.com/q/resources.png" alt="image" />
                                            </span>
                                            resources
                                        </h3>
                                        <ul className="list-numbers">
                                            <li><a href="#">Owners Manual</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li id="gGbox" className="hide-box">
                                    <div className="rel small-close-btn" id="gGpopUp"><a href="#"><i
                                        className="fas fa-times"></i>
                                    </a>
                                    </div>
                                    <div className="options-list">
                                        <h3 className="bg-maroon">
                                            <span className="option-icon">
                                                <img src="https://www.linkpicture.com/q/graphic.png" alt="image" />
                                            </span>
                                            graphics
                                        </h3>
                                        <ul className="list-numbers">
                                            <li><a href="#">Gear Shifter CAD</a></li>
                                            <li><a href="#">Gear Shifter Animation</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <ul className="bottom-center-message">
                    {/* <li>Gear Shifter</li> */}
                    <li>
                        {/* <div className="arrow-box"><img src="https://www.linkpicture.com/q/arrow_8.png" alt="image" /></div> */}
                    </li>
                </ul>
                <div className="popup-box" id="popupS">
                    <h1>Do you want this video to open on a small screen or a new browser tab</h1>
                    <div className="butns-links-popup">
                        <a href="#" className="close-btn"><i className="fas fa-times"></i></a>
                        <a href="#" id="small-screenS" className="vPlay margin-right-5" >Open Small Screen</a>
                        <a id="newTapS"
                            href="https://www.youtube.com/embed/XKfgdkcIUxw?title=0&portrait=0&byline=0&autoplay=1&loop=1&transparent=1"
                            target="_blank">Open New tab</a>
                    </div>
                </div>
                <div className="popup-box" id="popupG">
                    <h1>Do you want this video to open on a small screen or a new browser tab</h1>
                    <div className="butns-links-popup">
                        <a href="#" className="close-btn"><i className="fas fa-times"></i></a>
                        <a href="#" id="small-screenG" className="vPlay margin-right-5">Open Small Screen</a>
                        <a id="newTapG"
                            href="https://www.youtube.com/embed/SQIbeAk-bFA?title=0&portrait=0&byline=0&autoplay=1&loop=1&transparent=1"
                            target="_blank">Open New tab</a>
                    </div>
                </div>
                <div className="popup-box" id="popupR">
                    <h1>Do you want this video to open on a small screen or a new browser tab</h1>
                    <div className="butns-links-popup">
                        <a href="#" className="close-btn"><i className="fas fa-times"></i></a>
                        <a href="#" id="small-screenR" className="vPlay margin-right-5">Open Small Screen</a>
                        <a id="newTapR"
                            href="https://www.youtube.com/embed/zJFwOC_Bv4Y?title=0&portrait=0&byline=0&autoplay=1&loop=1&transparent=1"
                            target="_blank">Open New tab</a>
                    </div>
                </div>
                <div className="video-car" id="small-car-videoS">
                    <div className="rel">
                        <a href="#" className="close-btn2"><i className="fas fa-times"></i></a>
                        <iframe className="iframe-box" width="560" height="315" src="" title="YouTube video player" frameBorder="0"
                            allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    </div>
                </div>
                <div className="video-car" id="small-car-videoG">
                    <div className="rel">
                        <a href="#" className="close-btn2"><i className="fas fa-times"></i></a>
                        <iframe className="iframe-box" width="560" height="315" src="" title="YouTube video player" frameBorder="0"
                            allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>

                    </div>
                </div>
                <div className="video-car" id="small-car-videoR">
                    <div className="rel">
                        <a href="#" className="close-btn2"><i className="fas fa-times"></i></a>
                        <iframe className="iframe-box" width="560" height="315" src="" title="YouTube video player" frameBorder="0"
                            allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>

                    </div>
                </div>
                <input type="hidden" id="zoomIn1" value="0" />
                <input type="hidden" id="zoomIn2" value="0"></input>
                <div id='panorama'>

                </div>
                <Pannellum
                    width="100%"
                    height="1024px"
                    image={myImage}
                    pitch={-30}
                    yaw={180}
                    hfov={110}
                    autoLoad
                    onLoad={() => {
                        console.log("panorama loaded");
                    }}
                >
                    {/* <Pannellum.Hotspot
                        type="custom"
                        pitch={-50}
                        yaw={-178}
                        cssClass="thirdr"
                        text="Gear Shifter"
                        handleClick={function (evt, args) {
                            console.log(args.visitedSpot);
                            
                            args.insertPointToVisitedList(2);
                            console.log(document.getElementsByClassName('hotspot')[2].parentElement)
                            this.div.getElementsByClassName('hotspot')[0].classList.add('green');
                            $('#g-box').addClass("show-box");
                            $('#g-box').removeClass("hide-box");
                            $('#r-box').removeClass("show-box");
                            $('#s-box').removeClass("show-box");
                            $('.firstr').removeClass("active");
                            $('.secondr').removeClass("active");
                            $('.thirdr').removeClass("purple");
                            $('.thirdr').addClass("active");
                            $('#inspection3').val('1');
                            var first = $('#inspection1').val();
                            var second = $('#inspection2').val();
                            if (first == 1) {
                                $('.secondr').addClass("purple");
                            }
                            if (second == 1) {
                                $('.firstr').addClass("purple");
                            }
                        }}
                        handleClickArg={{
                            "id": 3, "visitedSpot": this.state.visitedSpot, insertPointToVisitedList: (id) => {
                                let visitedSpot = this.state.visitedSpot;
                                if(!visitedSpot.some((item) => {
                                    return item === id
                                })) {
                                    visitedSpot.push(id);
                                } 
                                this.setState({
                                    visitedSpot: visitedSpot
                                })
                            }
                        }}
                    />

                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-15}
                        cssClass="secondr"
                        yaw={-172}
                        text="Info Hotspot Text 3"
                        URL="https://github.com/farminf/pannellum-react"
                        handleClick={() => {
                            console.log('second');
                            $('#r-box').addClass("show-box");
                            $('#r-box').removeClass("hide-box");
                            $('#s-box').removeClass("show-box");
                            $('#g-box').removeClass("show-box");
                            $('.firstr').removeClass("active");
                            $('.secondr').removeClass("purple");
                            $('.secondr').addClass("active");
                            $('.secondr').removeClass("active");
                            $('#inspection2').val('1');
                            var first = $('#inspection1').val();
                            var third = $('#inspection3').val();
                            if (third == 1) {
                                $('.thirdr').addClass("purple");
                            }
                            if (first == 1) {
                                $('.firstr').addClass("purple");
                            }
                        }}
                        handleClickArg={{ "id": 2 }}

                    />
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-20}
                        cssClass="firstr"
                        yaw={-213}
                        text=""
                        handleClick={() => {
                            $('#s-box').addClass("show-box");
                            $('#s-box').removeClass("hide-box");
                            $('#g-box').removeClass("show-box");
                            $('#r-box').removeClass("show-box");
                            $('.firstr').addClass("active");
                            $('.firstr').removeClass("purple");
                            $('.secondr').removeClass("active");
                            $('.thirdr').removeClass("active");
                            $('#inspection1').val('1');
                            var second = $('#inspection2').val();
                            var third = $('#inspection3').val();
                            if (third == 1) {
                                $('.thirdr').addClass("purple");
                            }
                            if (second == 1) {
                                $('.secondr').addClass("purple");
                            }
                        }}
                        URL="https://github.com/farminf/pannellum-react"
                        handleClickArg={{ "id": 1 }}
                    /> */}
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-50}
                        yaw={-178}
                        cssClass="thirdr"
                        text="Gear Shifter"
                        handleClick={function (evt, args) {
                            console.log(args.visitedSpot);
                            args.visitedSpot.map((spot) => {
                                document.getElementsByClassName('hotspot')[spot].classList.add('purple')
                            })
                            this.div.getElementsByClassName('hotspot')[0].classList.remove('purple');
                            args.insertPointToVisitedList(args.id);
                            this.div.getElementsByClassName('hotspot')[0].classList.add('green');
                            $('#g-box').addClass("show-box");
                            $('#g-box').removeClass("hide-box");
                            $('#r-box').removeClass("show-box");
                            $('#s-box').removeClass("show-box");
                            $('.firstr').removeClass("active");
                            $('.secondr').removeClass("active");
                            $('.thirdr').removeClass("purple");
                            $('.thirdr').addClass("active");
                            $('#inspection3').val('1');
                            var first = $('#inspection1').val();
                            var second = $('#inspection2').val();
                            if (first == 1) {
                                $('.secondr').addClass("purple");
                            }
                            if (second == 1) {
                                $('.firstr').addClass("purple");
                            }
                        }}
                        handleClickArg={{
                            "id": 2, "visitedSpot": this.state.visitedSpot, insertPointToVisitedList: (id) => {
                                let visitedSpot = this.state.visitedSpot;
                                if (!visitedSpot.some((item) => {
                                    return item === id
                                })) {
                                    visitedSpot.push(id);
                                }
                                this.setState({
                                    visitedSpot: visitedSpot
                                })
                            }
                        }}
                    />

                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-15}
                        cssClass="secondr"
                        yaw={-172}
                        text="Info Hotspot Text 3"
                        URL="https://github.com/farminf/pannellum-react"
                        handleClick={function (evt, args) {
                            console.log(args.visitedSpot);
                            args.visitedSpot.map((spot) => {
                                console.log(document.getElementsByClassName('hotspot')[spot].classList.add('purple'))
                            })
                            this.div.getElementsByClassName('hotspot')[0].classList.remove('purple');
                            args.insertPointToVisitedList(args.id);
                            this.div.getElementsByClassName('hotspot')[0].classList.add('green');
                            $('#r-box').addClass("show-box");
                            $('#r-box').removeClass("hide-box");
                            $('#s-box').removeClass("show-box");
                            $('#g-box').removeClass("show-box");
                            $('.firstr').removeClass("active");
                            $('.secondr').removeClass("purple");
                            $('.secondr').addClass("active");
                            $('.secondr').removeClass("active");
                            $('#inspection3').val('1');
                            var first = $('#inspection1').val();
                            var second = $('#inspection2').val();
                            if (first == 1) {
                                $('.secondr').addClass("purple");
                            }
                            if (second == 1) {
                                $('.firstr').addClass("purple");
                            }
                        }}
                        handleClickArg={{
                            "id": 0, "visitedSpot": this.state.visitedSpot, insertPointToVisitedList: (id) => {
                                let visitedSpot = this.state.visitedSpot;
                                if (!visitedSpot.some((item) => {
                                    return item === id
                                })) {
                                    visitedSpot.push(id);
                                }
                                this.setState({
                                    visitedSpot: visitedSpot
                                })
                            }
                        }}


                    />
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-20}
                        cssClass="firstr"
                        yaw={-213}
                        text=""
                        handleClick={function (evt, args) {
                            console.log(args.visitedSpot);
                            args.visitedSpot.map((spot) => {    
                                console.log(document.getElementsByClassName('hotspot')[spot].classList.add('purple'))
                            })
                            this.div.getElementsByClassName('hotspot')[0].classList.remove('purple');
                            args.insertPointToVisitedList(args.id);
                            this.div.getElementsByClassName('hotspot')[0].classList.add('green');
                            $('#s-box').addClass("show-box");
                            $('#s-box').removeClass("hide-box");
                            $('#g-box').removeClass("show-box");
                            $('#r-box').removeClass("show-box");
                            $('.firstr').addClass("active");
                            $('.firstr').removeClass("purple");
                            $('.secondr').removeClass("active");
                            $('.thirdr').removeClass("active");
                            $('#inspection3').val('1');
                            var first = $('#inspection1').val();
                            var second = $('#inspection2').val();
                            if (first == 1) {
                                $('.secondr').addClass("purple");
                            }
                            if (second == 1) {
                                $('.firstr').addClass("purple");
                            }
                        }}
                        handleClickArg={{
                            "id": 1, "visitedSpot": this.state.visitedSpot, insertPointToVisitedList: (id) => {
                                let visitedSpot = this.state.visitedSpot;
                                if (!visitedSpot.some((item) => {
                                    return item === id
                                })) {
                                    visitedSpot.push(id);
                                }
                                this.setState({
                                    visitedSpot: visitedSpot
                                })
                            }
                        }}

                    />
                </Pannellum>
            </div>
        );
    }

}

const mapStateToProps = state => (state.User);

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Car);
