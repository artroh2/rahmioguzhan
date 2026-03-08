import goldenHeart from '@/assets/golden-heart.png';

const Footer = () => {
  return (
    <footer className="py-12 px-4 relative border-t border-border">
      <div className="container max-w-5xl mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          Designed by Rahmi Oğuzhan Hacıeyüpoğlu
        </p>
        <p className="text-sm text-muted-foreground mt-1">
          All rights reserved.
        </p>
        <img src={goldenHeart} alt="Golden Heart" className="mx-auto mt-4 w-12 h-12 object-contain" />
      </div>
    </footer>
  );
};

export default Footer;
