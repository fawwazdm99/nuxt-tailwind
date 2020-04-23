import { mount } from "@vue/test-utils";
import memberCard from "@/components/MemberCard.vue";
import blogCard from "@/components/BlogCard.vue";
import errorRequest from "@/components/ErrorRequest.vue";

describe("MemberCard.vue", () => {
  it("renders All props ketika dilempar", () => {
    const email = "fdm99@yahoo.com";
    const firstName = "Fawwaz";
    const lastName = "Daffa";
    const img =
      "https://cdn.animenewsnetwork.com/thumbnails/max650x650/cms/news.3/150316/another-world.jpg";
    const wrapper = mount(memberCard, {
      propsData: { email, firstName, lastName, img },
    });
    expect(wrapper.find("#member-email").text()).toBe(email);
    expect(wrapper.find("#member-name").text()).toBe(
      firstName + " " + lastName
    );
  });
  it("should render as its props", () => {
    const email = "fdm99@yahoo.com.snapshot";
    const firstName = "Fawwaz.snapshot";
    const lastName = "Daffa.snapshot";
    const img =
      "https://cdn.animenewsnetwork.com/thumbnails/max650x650/cms/news.3/150316/another-world.jpg";
    const wrapper = mount(memberCard, {
      propsData: { email, firstName, lastName, img },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});

describe("BlogCard.vue", () => {
  it("must renders body and title props in blog card", () => {
    const blogBody = "Some content of the blog";
    const blogTitle = "some title of the blog";
    const wrapper = mount(blogCard, {
      propsData: { blogBody, blogTitle },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});

describe("ErrorRequest.vue", () => {
  it("Must render message props in error request", () => {
    const message = "Unknow error unfortunately";
    const wrapper = mount(errorRequest, {
      propsData: { message },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});

// describe("MemberCard.vue", () => {
//   it("");
// });
